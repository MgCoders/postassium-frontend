import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { Tarea } from '../../_models/Tarea';
import { TareaImp } from '../../_models/TareaImp';
import { PuntoControl } from '../../_models/PuntoControl';
import {Cliente} from '../../_models/Cliente';
import {Equipo} from '../../_models/Equipo';
import {EquipoService} from '../../_services/equipo.service';
import {EquipoImp} from '../../_models/EquipoImp';
import {TipoEquipoImp} from '../../_models/TipoEquipoImp';
import {TipoEquipo} from '../../_models/TipoEquipo';

@Component({
  selector: 'app-alta-equipo',
  templateUrl: './alta-equipo.component.html',
  styleUrls: ['./alta-equipo.component.scss']
})
export class AltaEquipoComponent implements OnInit {

  public equipoActual: Equipo;
  public cliente: Cliente;
  tipoEquipoActual: TipoEquipo;

  constructor(
      public dialogRef: MatDialogRef<AltaEquipoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [Equipo, Cliente, Equipo[], number],
      private equipoService: EquipoService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    if (this.data[0] === undefined) {
      this.equipoActual = {} as Equipo;
    } else {
      this.equipoActual = new EquipoImp(this.data[0]);
      this.tipoEquipoActual = this.equipoActual.tipoEquipo;
    }
    this.equipoActual.cliente = this.data[1];
    this.equipoActual.tipoEquipo = {} as TipoEquipo;
    this.tipoEquipoActual = this.equipoActual.tipoEquipo;
  }

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (isNaN(this.tipoEquipoActual.id)) {
      this.equipoActual.tipoEquipo = undefined;
    } else {
      this.equipoActual.tipoEquipo = this.tipoEquipoActual;
    }
    if (this.data[0] === undefined) {
      this.equipoService.create(this.equipoActual).subscribe(
        (data) => {
          this.alertService.success('Equipo agregada correctamente.', 3000);
          this.data[2].push(data);
          this.dialogRef.close();
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
    } else {
      this.equipoService.edit(this.equipoActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.success('Tarea actualizada correctamente.', 3000);
          const index: number = this.data[2].indexOf(this.data[0]);
          this.data[1][index] = data;
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
    }
  }

  tipoEquipoOnChange(tp: TipoEquipo) {
    this.tipoEquipoActual = tp;
  }
}
