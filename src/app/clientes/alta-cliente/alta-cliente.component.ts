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
import { NucleoMaterialService } from '../../_services/nucleomaterial.service';
import {ClienteService} from "../../_services/cliente.service";
import {Cliente} from "../../_models/Cliente";
import {ClienteImp} from "../../_models/ClienteImp";

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.scss']
})
export class AltaClienteComponent implements OnInit {

  clienteActual: Cliente;

  public nombreEmpresaFC = new FormControl('', [Validators.required]);
  public personaContactoFC = new FormControl('', [Validators.required]);
  public telefonoContactoFC = new FormControl('', [Validators.required]);

  constructor(
      public dialogRef: MatDialogRef<AltaClienteComponent>,
      @Inject(MAT_DIALOG_DATA) public cliente: Cliente,
      private clienteService: ClienteService,
      private alertService: AlertService,
      private layoutService: LayoutService,
  ) { }

  ngOnInit() {
    if (isNaN(this.cliente.id)) {
      this.clienteActual = {} as Cliente;
    } else {
      this.clienteActual = new ClienteImp(this.cliente);
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');

    console.log(this.clienteActual)
    if (isNaN(this.clienteActual.id)) {
      this.clienteService.create(this.clienteActual).subscribe(
          (data) => {
            this.alertService.success('Cliente agregado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.clienteService.edit(this.clienteActual).subscribe(
          (data) => {
            this.alertService.success('Cliente actualizado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }

}
