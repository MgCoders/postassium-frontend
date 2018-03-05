import { Component, Inject, OnInit } from '@angular/core';
import { Material } from '../../_models/Material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MaterialService } from '../../_services/material.service';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { MaterialImp } from '../../_models/MaterialImp';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-material',
  templateUrl: './alta-material.component.html',
  styleUrls: ['./alta-material.component.scss']
})
export class AltaMaterialComponent implements OnInit {

  materialActual: Material;
  tipoMaterialActual: TipoMaterial;

  public nombreFC = new FormControl('', [Validators.required]);

  constructor(
      public dialogRef: MatDialogRef<AltaMaterialComponent>,
      @Inject(MAT_DIALOG_DATA) public material: Material,
      private materialService: MaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    if (isNaN(this.material.id)) {
      this.materialActual = {} as Material;
    } else {
      this.materialActual = new MaterialImp(this.material);
      this.tipoMaterialActual = this.materialActual.tipoMaterial;
    }

    if (this.tipoMaterialActual === undefined) {
      this.tipoMaterialActual = {} as TipoMaterial;
    }

  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (isNaN(this.tipoMaterialActual.id)) {
      this.materialActual.tipoMaterial = undefined;
    } else {
      this.materialActual.tipoMaterial = this.tipoMaterialActual;
    }

    if (isNaN(this.materialActual.id)) {
      this.materialService.create(this.materialActual).subscribe(
          (data) => {
            this.alertService.success('Material agregado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.materialService.edit(this.materialActual).subscribe(
          (data) => {
            this.alertService.success('Material actualizado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }

  tipoMaterialOnChange(tp: TipoMaterial) {
    this.tipoMaterialActual = tp;
  }
}
