import { Component, Inject, OnInit } from '@angular/core';
import { Usuario } from '../../_models/Usuario';
import { UsuarioService } from '../../_services/usuario.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { UsuarioImp } from '../../_models/UsuarioImp';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { Rubro } from '../../_models/Rubro';
import { UsuarioRubro } from '../../_models/UsuarioRubro';
import {MarcaEquipo} from "../../_models/MarcaEquipo";
import {MarcaEquipoService} from "../../_services/marca-equipo.services";
import {MarcaEquipoImp} from "../../_models/MarcaEquipoImp";

@Component({
  selector: 'app-alta-marca',
  templateUrl: './alta-marca.component.html',
  styleUrls: ['./alta-marca.component.scss']
})
export class AltaMarcaComponent implements OnInit {

  public marcaActual: MarcaEquipo;

    public nombreFC = new FormControl('', [Validators.required]);

  constructor(
      public dialogRef: MatDialogRef<AltaMarcaComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [MarcaEquipo, MarcaEquipo[]],
      private marcaEquipoService: MarcaEquipoService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    if (this.data[0] === undefined) {
      this.marcaActual = {} as MarcaEquipo;
      this.marcaActual.nombre = '';
    } else {
      this.marcaActual = new MarcaEquipoImp(this.data[0]);
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (this.data[0] === undefined) {
      this.marcaEquipoService.create(this.marcaActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Marca agregada correctamente.', 3000);
            this.data[1].push(data);
            this.dialogRef.close();
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.marcaEquipoService.edit(this.marcaActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Marca actualizada correctamente.', 3000);
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
