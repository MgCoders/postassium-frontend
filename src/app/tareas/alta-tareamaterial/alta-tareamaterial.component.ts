import { Component, Inject, OnInit } from '@angular/core';
import { TareaMaterial } from '../../_models/TareaMaterial';
import { TareaService } from '../../_services/tarea.service';
import { Tarea } from '../../_models/Tarea';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { Material } from '../../_models/Material';
import { TareaMaterialImp } from '../../_models/TareaMaterialImp';

@Component({
  selector: 'app-alta-tareamaterial',
  templateUrl: './alta-tareamaterial.component.html',
  styleUrls: ['./alta-tareamaterial.component.scss']
})
export class AltaTareaMaterialComponent implements OnInit {

  tareaMaterialActual: TareaMaterial;
  materialActual: Material;

  constructor(
      public dialogRef: MatDialogRef<AltaTareaMaterialComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [TareaMaterial, Tarea],
      private tareaService: TareaService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    if (this.data[0] === undefined) {
      this.tareaMaterialActual = {} as TareaMaterial;
      this.materialActual = {} as Material;
      this.materialActual.id = -1;
      this.tareaMaterialActual.tarea = this.data[1];
    } else {
      this.tareaMaterialActual = new TareaMaterialImp(this.data[0]);
      this.materialActual = this.tareaMaterialActual.material;
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (this.data[0] === undefined) {
      this.tareaService.createTareaMaterial(this.tareaMaterialActual).subscribe(
          (data) => {
            this.alertService.success('Material agregado a la tarea correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.tareaService.editTareaMaterial(this.tareaMaterialActual).subscribe(
          (data) => {
            this.alertService.success('Material para la tarea ha sido editado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }

  materialOnChange(m: Material) {
    this.tareaMaterialActual.material = m;
  }

}
