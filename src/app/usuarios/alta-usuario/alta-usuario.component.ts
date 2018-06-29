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

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  public usuarioActual: Usuario;
  public rubroActual: Rubro;

  public nombreFC = new FormControl('', [Validators.required]);
  public mailFC = new FormControl('', [Validators.required, Validators.email]);

  constructor(
      public dialogRef: MatDialogRef<AltaUsuarioComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [Usuario, Usuario[]],
      private usuarioService: UsuarioService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.rubroActual = {} as Rubro;
    if (this.data[0] === undefined) {
      this.usuarioActual = {} as Usuario;
      this.usuarioActual.usuarioRubros = new Array();
      this.usuarioActual.role = 'USER';
      this.usuarioActual.login = false;
    } else {
      this.usuarioActual = new UsuarioImp(this.data[0]);
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (this.data[0] === undefined) {
      this.usuarioService.create(this.usuarioActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Usuario agregado correctamente.', 3000);
            this.data[1].push(data);
            this.dialogRef.close();
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.usuarioService.edit(this.usuarioActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Usuario actualizado correctamente.', 3000);
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

  rubroOnChange(x: Rubro) {
    const rub: UsuarioRubro = this.usuarioActual.usuarioRubros.find((ur) => ur.rubro.id === x.id);
    if (rub == null || rub === undefined) {
        const usuarioRubro = {} as UsuarioRubro;
        usuarioRubro.rubro = x;
        this.usuarioActual.usuarioRubros.push(usuarioRubro);
    }
    this.rubroActual = {} as Rubro;
  }

  eliminarRubro(x: Rubro) {
    const rub: UsuarioRubro = this.usuarioActual.usuarioRubros.find((ur) => ur.rubro.id === x.id);
    const index = this.usuarioActual.usuarioRubros.indexOf(rub);
    this.usuarioActual.usuarioRubros.splice(index, 1);
  }


}
