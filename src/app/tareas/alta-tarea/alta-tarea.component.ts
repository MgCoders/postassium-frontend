import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { Tarea } from '../../_models/Tarea';
import { TareaImp } from '../../_models/TareaImp';

@Component({
  selector: 'app-alta-tarea',
  templateUrl: './alta-tarea.component.html',
  styleUrls: ['./alta-tarea.component.scss']
})
export class AltaTareaComponent implements OnInit {

  public tareaActual: Tarea;

  constructor(public dialogRef: MatDialogRef<AltaTareaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [Tarea, Tarea[]],
              private tareaService: TareaService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    if (this.data[0].id == null) {
      this.tareaActual = this.data[0]; // TODO cambiar esto
    } else {
      this.tareaActual = new TareaImp(this.data[0]);
    }
  }

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (this.data[0].id == null) {
      this.tareaService.create(this.tareaActual).subscribe(
        (data) => {
          this.alertService.success('Tarea agregada correctamente.', 3000);
          this.data[1].push(data);
          this.dialogRef.close();
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
    } else {
      this.tareaService.edit(this.tareaActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.success('Tarea actualizada correctamente.', 3000);
          const index: number = this.data[1].indexOf(this.data[0]);
          this.data[1][index] = data;
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
    }
  }
}
