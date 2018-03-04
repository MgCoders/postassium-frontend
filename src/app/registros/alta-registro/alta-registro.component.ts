import { Component, Inject, OnInit } from '@angular/core';
import { Registro } from '../../_models/Registro';
import { RegistroService } from '../../_services/registro.service';
import { Tarea } from '../../_models/Tarea';
import { DateAdapter, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { Usuario } from '../../_models/Usuario';
import { Rubro } from '../../_models/Rubro';
import { RegistroImp } from '../../_models/RegistroImp';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-alta-registro',
  templateUrl: './alta-registro.component.html',
  styleUrls: ['./alta-registro.component.scss']
})
export class AltaRegistroComponent implements OnInit {

  registroActual: Registro;
  rubrosUsuario: Rubro[];
  fechaActual: Date;
  usuarioActual: Usuario;
  rubroActual: Rubro;
  rubroActualId: number;

  constructor(
      public dialogRef: MatDialogRef<AltaRegistroComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [Registro, Tarea],
      private registroService: RegistroService,
      private alertService: AlertService,
      private layoutService: LayoutService,
      private datePipe: DatePipe,
      private adapter: DateAdapter<any>
  ) { }

  ngOnInit() {
    this.adapter.setLocale('es');

    if (this.data[0] === undefined) {
      this.registroActual = {} as Registro;
      this.registroActual.tarea = this.data[1];
      this.fechaActual = new Date();
    } else {
      this.registroActual = new RegistroImp(this.data[0]);
      this.usuarioActual = this.registroActual.usuario;
      this.rubroActual = this.registroActual.rubro;
      this.fechaActual = this.dateFromString(this.registroActual.fecha);
    }

    if (this.registroActual.usuario === undefined) {
      this.usuarioActual = {} as Usuario;
    }
    if (this.registroActual.rubro === undefined) {
      this.rubroActual = {} as Rubro;
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    this.registroActual.fecha = this.datePipe.transform(this.fechaActual, 'dd-MM-yyyy');

    if (isNaN(this.usuarioActual.id)) {
      this.registroActual.usuario = undefined;
    } else {
      this.registroActual.usuario = this.usuarioActual;
    }
    if (isNaN(this.rubroActual.id)) {
      this.registroActual.rubro = undefined;
    } else {
      this.registroActual.rubro = this.rubroActual;
    }

    if (this.data[0] === undefined) {
      this.registroService.create(this.registroActual).subscribe(
          (data) => {
            this.alertService.success('Registro agregado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.registroService.edit(this.registroActual).subscribe(
          (data) => {
            this.alertService.success('Registro actualizado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }

  usuarioOnChange(u: Usuario) {
    this.usuarioActual = u;
    this.rubroActual = {} as Rubro;
    this.rubrosUsuario = [];
    this.rubrosUsuario = new Array();
    this.usuarioActual.usuarioRubros.forEach(
        (ur) => this.rubrosUsuario.push(ur.rubro)
    );
    console.log(u);
    console.log(this.rubrosUsuario);
  }

  dateFromString(str: string): Date {
    const aux: string[] = str.split('-');
    return new Date(+aux[2], +aux[1] - 1, +aux[0]);
  }
}
