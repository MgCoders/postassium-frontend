import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { Tarea } from '../../_models/Tarea';
import { Trabajo } from '../../_models/Trabajo';
import { AltaPuntocontrolComponent } from '../../puntoscontrol/alta-puntocontrol/alta-puntocontrol.component';
import { PuntoControl } from '../../_models/PuntoControl';
import { TrabajoService } from "../../_services/trabajo.service";

@Component({
  selector: 'app-detalle-trabajos',
  templateUrl: './detalle-trabajos.component.html',
  styleUrls: ['./detalle-trabajos.component.scss']
})
export class DetalleTrabajosComponent implements OnInit {

  public lista: Tarea[];
  public trabajo: Trabajo;

  constructor(public dialog: MatDialog,
              private tareaService: TareaService,
              private trabajoService: TrabajoService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.lista = new Array();

    this.layoutService.updatePreloaderState('active');
    // TODO pasar por parámetro el id del trabajo
    this.trabajoService.get(1).subscribe(
      (data) => {
        this.trabajo = data;
        this.layoutService.updatePreloaderState('hide');
      },
      (error) => {
        this.layoutService.updatePreloaderState('hide');
        this.alertService.error(error, 5000);
      });
    this.tareaService.getAllByTrabajo(1).subscribe(
      (data) => {
        this.lista = data;
        this.layoutService.updatePreloaderState('hide');
      },
      (error) => {
        this.layoutService.updatePreloaderState('hide');
        this.alertService.error(error, 5000);
      });
  }

  nuevo() {
  }

  eliminar(x: Tarea) {
  }

  editar(x: Tarea) {
  }

  nuevoPuntoContol() {
  }

}
