import { Component, Inject, OnInit } from '@angular/core';
import { Material } from '../../_models/Material';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MaterialService } from '../../_services/material.service';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { MaterialImp } from '../../_models/MaterialImp';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { FormControl, Validators } from '@angular/forms';
import { UnidadMedida } from '../../_models/UnidadMedida';
import { noUndefined } from '@angular/compiler/src/util';
import { NucleoMaterial } from '../../_models/NucleoMaterial';

@Component({
  selector: 'app-alta-material',
  templateUrl: './alta-material.component.html',
  styleUrls: ['./alta-material.component.scss']
})
export class AltaMaterialComponent implements OnInit {

  materialActual: Material;
  tipoMaterialActual: TipoMaterial;
  medidaActual1: UnidadMedida;
  medidaActual2: UnidadMedida;
  medidaActual3: UnidadMedida;
  nucleoActual: NucleoMaterial;

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
      this.medidaActual1 = this.materialActual.medida1;
      this.medidaActual2 = this.materialActual.medida2;
      this.medidaActual3 = this.materialActual.medida3;
      this.nucleoActual = this.materialActual.nucleoMaterial;
    }

    if (this.tipoMaterialActual === undefined) {
      this.tipoMaterialActual = {} as TipoMaterial;
    }
    if (this.medidaActual1 === undefined) {
      this.medidaActual1 = {} as UnidadMedida;
    }
    if (this.medidaActual2 === undefined) {
      this.medidaActual2 = {} as UnidadMedida;
    }
    if (this.medidaActual3 === undefined) {
      this.medidaActual3 = {} as UnidadMedida;
    }
    if (this.nucleoActual === undefined) {
      this.nucleoActual = {} as NucleoMaterial;
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (isNaN(this.tipoMaterialActual.id)) {
      this.materialActual.tipoMaterial = undefined;
    } else {
      this.materialActual.tipoMaterial = this.tipoMaterialActual;
    }
    if (isNaN(this.medidaActual1.id)) {
      this.materialActual.medida1 = undefined;
    } else {
      this.materialActual.medida1 = this.medidaActual1;
    }
    if (isNaN(this.medidaActual2.id)) {
      this.materialActual.medida2 = undefined;
    } else {
      this.materialActual.medida2 = this.medidaActual2;
    }
    if (isNaN(this.medidaActual3.id)) {
      this.materialActual.medida3 = undefined;
    } else {
      this.materialActual.medida3 = this.medidaActual3;
    }
    if (isNaN(this.nucleoActual.id)) {
      this.materialActual.nucleoMaterial = undefined;
    } else {
      this.materialActual.nucleoMaterial = this.nucleoActual;
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

  nucleoOnChange(n: NucleoMaterial) {
    this.nucleoActual = n;
  }

  medida1OnChange(un: UnidadMedida) {
    this.medidaActual1 = un;
  }

  medida2OnChange(un: UnidadMedida) {
    this.medidaActual2 = un;
  }

  medida3OnChange(un: UnidadMedida) {
    this.medidaActual3 = un;
  }

}
