import { Component, Inject, OnInit } from '@angular/core';
import { Rubro } from '../../_models/Rubro';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RubroService } from '../../_services/rubros.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { RubroImp } from '../../_models/RubroImp';

@Component({
  selector: 'app-alta-rubro',
  templateUrl: './alta-rubro.component.html',
  styleUrls: ['./alta-rubro.component.scss']
})
export class AltaRubroComponent implements OnInit {

  public rubroActual: Rubro;

  constructor(public dialogRef: MatDialogRef<AltaRubroComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [Rubro, Rubro[]],
              private cs: RubroService,
              private as: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    if (this.data[0] === undefined) {
      this.rubroActual = {} as Rubro;
    } else {
      this.rubroActual = new RubroImp(this.data[0]);
    }
  }

  Cerrar() {
    this.dialogRef.close();
  }

  Guardar() {
    this.layoutService.updatePreloaderState('active');
    if (this.data[0] === undefined) {
      this.cs.create(this.rubroActual).subscribe(
          (data) => {
            this.as.success('Rubro agregado correctamente.', 3000);
            this.data[1].push(data);
            this.layoutService.updatePreloaderState('hide');
            this.dialogRef.close();
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.as.error(error, 5000);
          });
    } else {
      this.cs.edit(this.rubroActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.as.success('Rubro actualizado correctamente.', 3000);
            const index: number = this.data[1].indexOf(this.data[0]);
            this.data[1][index] = data;
            this.dialogRef.close();
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.as.error(error, 5000);
          });
    }
  }
}
