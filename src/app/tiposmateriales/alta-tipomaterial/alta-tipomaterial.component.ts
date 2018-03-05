import { Component, Inject, OnInit } from '@angular/core';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { TipoMaterialService } from '../../_services/tipomaterial.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { TipoMaterialImp } from '../../_models/TipoMaterialImp';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-tipomaterial',
  templateUrl: './alta-tipomaterial.component.html',
  styleUrls: ['./alta-tipomaterial.component.scss']
})
export class AltaTipoMaterialComponent implements OnInit {

  tipoMaterialActual: TipoMaterial;

  public nombreFC = new FormControl('', [Validators.required]);
  public codigoFC = new FormControl('', [Validators.required]);

  constructor(
      public dialogRef: MatDialogRef<AltaTipoMaterialComponent>,
      @Inject(MAT_DIALOG_DATA) public tipoMaterial: TipoMaterial,
      private tipoMaterialService: TipoMaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    if (isNaN(this.tipoMaterial.id)) {
      this.tipoMaterialActual = {} as TipoMaterial;
    } else {
      this.tipoMaterialActual = new TipoMaterialImp(this.tipoMaterial);
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (isNaN(this.tipoMaterial.id)) {
      this.tipoMaterialService.create(this.tipoMaterialActual).subscribe(
          (data) => {
            this.alertService.success('Tipo de Material agregado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.tipoMaterialService.edit(this.tipoMaterialActual).subscribe(
          (data) => {
            this.alertService.success('Tipo de Material actualizado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }

}
