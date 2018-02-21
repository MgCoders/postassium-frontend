import { Component, Inject, OnInit } from '@angular/core';
import { Usuario } from '../../_models/Usuario';
import { UsuarioService } from '../../_services/usuario.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { UsuarioImp } from '../../_models/UsuarioImp';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Rubro } from '../../_models/Rubro';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {

  public usuarioActual: Usuario;
  public rubrosActuales: Rubro[];
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
    this.rubrosActuales = new Array();
    if (this.data[0] === undefined) {
      this.usuarioActual = {} as Usuario;
    } else {
      this.usuarioActual = new UsuarioImp(this.data[0]);
      this.usuarioActual.usuarioRubros.forEach(
          (r) => this.rubrosActuales.push(r.rubro));
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
    const rub: Rubro = this.rubrosActuales.find((r) => r.id === x.id);
    if (rub == null || rub === undefined) {
        this.rubrosActuales.push(x);
    }
  }

  eliminarRubro(x: Rubro) {
    const rub: Rubro = this.rubrosActuales.find((r) => r.id === x.id);
    const index = this.rubrosActuales.indexOf(rub);
    this.rubrosActuales.splice(index, 1);
  }

  rubrosUsuario(u: Usuario) {
      const result: string;
      u.usuarioRubros.forEach((r) => result += r.rubro.nombre);
      return result;
  }
}
