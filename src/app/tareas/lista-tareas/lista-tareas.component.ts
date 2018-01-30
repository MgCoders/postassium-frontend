import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AltaTareaComponent} from '../alta-tarea/alta-tarea.component';
import {TareaService} from '../../_services/tarea.service';
import {AlertService} from '../../_services/alert.service';
import {LayoutService} from '../../layout/layout.service';
import {DialogConfirmComponent} from '../../shared/dialog-confirm/dialog-confirm.component';
import {Tarea} from '../../_models/Tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  public lista: Tarea[];

  constructor(public dialog: MatDialog,
              private service: TareaService,
              private as: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.lista = new Array();

    this.layoutService.updatePreloaderState('active');
    this.service.getAll().subscribe(
      (data) => {
        this.lista = data;
        // tslint:disable-next-line:only-arrow-functions
        this.lista.sort(function(a, b) {
          return a.id - b.id;
        });
        this.layoutService.updatePreloaderState('hide');
      },
      (error) => {
        this.layoutService.updatePreloaderState('hide');
        this.as.error(error, 5000);
      });
  }

  Nuevo() {
    const dialog = this.dialog.open(AltaTareaComponent, {
      data: [undefined, this.lista],
      width: '600px',
    });
  }

  Eliminar(x: Tarea) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar la tarea ' + x.nombre + '?',
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          // TODO
          this.as.success('Tarea eliminada correctamente.', 3000);
        }
      });
  }

  Editar(x: Tarea) {
    const dialog = this.dialog.open(AltaTareaComponent, {
      data: [x, this.lista],
      width: '600px',
    });
  }
}
