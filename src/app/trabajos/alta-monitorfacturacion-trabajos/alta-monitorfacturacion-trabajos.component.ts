import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { Tarea } from '../../_models/Tarea';
import { TareaImp } from '../../_models/TareaImp';
import {TrabajoService} from '../../_services/trabajo.service';
import {Trabajo} from '../../_models/Trabajo';
import {TrabajoImp} from '../../_models/TrabajoImp';

@Component({
  selector: 'app-alta-monitorfacturacion',
  templateUrl: './alta-monitorfacturacion-trabajos.component.html',
  styleUrls: ['./alta-monitorfacturacion-trabajos.component.scss']
})
export class AltaMonitorFacturacionTrabajosComponent implements OnInit {

  public trabajoActual: Trabajo;
  public tipo: string;

  constructor(public dialogRef: MatDialogRef<AltaMonitorFacturacionTrabajosComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [Trabajo, Trabajo[]],
              private cs: TrabajoService,
              private as: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    console.log(this.data[0]);
    if (this.data[0] === undefined) {
      this.trabajoActual = {} as Trabajo;
    } else {
      this.trabajoActual = new TrabajoImp(this.data[0]);
    }
    if (this.data[1] === undefined) {
          this.tipo = 'factura';
      } else {
          this.tipo =  '' + this.data[1];
      }

  }

  Cerrar() {
    this.dialogRef.close();
  }

  Guardar() {
    this.layoutService.updatePreloaderState('active');
    console.log(this.trabajoActual);
    if (this.data[0] !== undefined) {
      this.cs.edit(this.trabajoActual).subscribe(
          (data) => {
              this.layoutService.updatePreloaderState('hide');
              if (this.tipo === 'factura') {
                  this.trabajoActual.estado = 'FINALIZADO';
                  this.as.success('Número de factura asignado correctamente.', 3000);
              } else {
                  /*this.trabajoActual.estado = 'PENDIENTE_ASIGNACION_VALORES';*/
                  this.trabajoActual.estado = 'PENDIENTE_FACTURA';
                  this.as.success('Número de remito asignado correctamente.', 3000);
              }
              this.dialogRef.close(1);
          },
          (error) => {
              this.layoutService.updatePreloaderState('hide');
              this.as.error(error, 5000);
          });
    } else {
      this.cs.edit(this.trabajoActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.as.success('Tarea actualizada correctamente.', 3000);
          const index: number = this.data[1].indexOf(this.data[0]);
          this.data[1][index] = data;
          this.dialogRef.close(1);
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.as.error(error, 5000);
        });
    }
  }
}
