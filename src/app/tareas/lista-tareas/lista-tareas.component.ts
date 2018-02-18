import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AltaTareaComponent} from '../alta-tarea/alta-tarea.component';
import {TareaService} from '../../_services/tarea.service';
import {AlertService} from '../../_services/alert.service';
import {LayoutService} from '../../layout/layout.service';
import {DialogConfirmComponent} from '../../shared/dialog-confirm/dialog-confirm.component';
import {Tarea} from '../../_models/Tarea';
import { AltaPuntocontrolComponent } from '../../puntoscontrol/alta-puntocontrol/alta-puntocontrol.component';
import { PuntoControl } from '../../_models/PuntoControl';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  public lista: Tarea[];
  public tarea: Tarea;
  public puntoControl: PuntoControl;

  constructor(public dialog: MatDialog,
              private tareaService: TareaService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.lista = new Array();

    this.layoutService.updatePreloaderState('active');
    this.tareaService.getAll().subscribe(
      (data) => {
        this.lista = data;

        // TODO ESTO NO VA ASI, DEBE SER POR SELECT
        this.tarea = {} as Tarea; // TODO esto NO VA hay que hacer un select
        this.tarea.puntoControl = this.lista[0].puntoControl;
        this.puntoControl = {} as PuntoControl;
        this.puntoControl.trabajo = this.lista[0].puntoControl.trabajo;
        this.layoutService.updatePreloaderState('hide');
      },
      (error) => {
        this.layoutService.updatePreloaderState('hide');
        this.alertService.error(error, 5000);
      });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaTareaComponent, {
      data: [this.tarea, this.lista],
      width: '600px',
    });
  }

  eliminar(x: Tarea) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar la tarea ' + x.nombre + '?',
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          // TODO
          this.alertService.success('Tarea eliminada correctamente.', 3000);
        }
      });
  }

  editar(x: Tarea) {
    const dialog = this.dialog.open(AltaTareaComponent, {
      data: [x, this.lista],
      width: '600px',
    });
  }

  nuevoPuntoContol() {
    const dialog = this.dialog.open(AltaPuntocontrolComponent, {
      data: this.puntoControl,
      width: '600px',
    });
  }

}
