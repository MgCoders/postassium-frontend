import { Component, Inject, OnInit } from '@angular/core';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { TipoMaterialService } from '../../_services/tipomaterial.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { TipoMaterialImp } from '../../_models/TipoMaterialImp';
import { FormControl, Validators } from '@angular/forms';
import {TipoEquipo} from "../../_models/TipoEquipo";
import {TipoEquipoImp} from "../../_models/TipoEquipoImp";

@Component({
  selector: 'app-alta-tipomaterial',
  templateUrl: './alta-tipoequipo.component.html',
  styleUrls: ['./alta-tipoequipo.component.scss']
})
export class AltaTipoEquipoComponent implements OnInit {

  tipoEquipoActual: TipoEquipo;

  public descripcionFC = new FormControl('', [Validators.required]);


  constructor(
      public dialogRef: MatDialogRef<AltaTipoEquipoComponent>,
      @Inject(MAT_DIALOG_DATA) public tipoEquipo: TipoEquipo,
      private tipoMaterialService: TipoMaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    if (isNaN(this.tipoEquipo.id)) {
      this.tipoEquipoActual = {} as TipoEquipo;
    } else {
      this.tipoEquipoActual = new TipoEquipoImp(this.tipoEquipo);
    }
  }

  guardar() {
    // this.layoutService.updatePreloaderState('active');
    // if (isNaN(this.tipoEquipo.id)) {
    //   this.tipoMaterialService.create(this.tipoEquipoActual).subscribe(
    //       (data) => {
    //         this.alertService.success('Tipo de Material agregado correctamente.', 3000);
    //         this.dialogRef.close(1);
    //       },
    //       (error) => {
    //         this.layoutService.updatePreloaderState('hide');
    //         this.alertService.error(error, 5000);
    //       });
    // } else {
    //   this.tipoMaterialService.edit(this.tipoMaterialActual).subscribe(
    //       (data) => {
    //         this.alertService.success('Tipo de Material actualizado correctamente.', 3000);
    //         this.dialogRef.close(1);
    //       },
    //       (error) => {
    //         this.layoutService.updatePreloaderState('hide');
    //         this.alertService.error(error, 5000);
    //       });
    // }
  }

}
