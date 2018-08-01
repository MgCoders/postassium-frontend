import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AltaTareaComponent } from '../alta-tarea/alta-tarea.component';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { Tarea } from '../../_models/Tarea';
import { AltaPuntocontrolComponent } from '../../puntoscontrol/alta-puntocontrol/alta-puntocontrol.component';
import { Trabajo } from '../../_models/Trabajo';
import { TrabajoService } from '../../_services/trabajo.service';
import { Router } from '@angular/router';
import { PuntoControl } from '../../_models/PuntoControl';
import {PuntoControlService} from '../../_services/punto-control.services';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  @Input() lista: Tarea[];
  public loadCompleted: boolean;
  @Input() trabajo: Trabajo;
  @Output() onChangeParaFinalizarTrabajo: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog,
              private tareaService: TareaService,
              private trabajoService: TrabajoService,
              private puntoControlService: PuntoControlService,
              private alertService: AlertService,
              private layoutService: LayoutService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.lista = new Array();
    this.loadCompleted = false;
    this.layoutService.updatePreloaderState('active');
    this.loadData();
  }

  loadData() {
      this.tareaService.getAllByTrabajo(this.trabajo.id).subscribe(
          (datatarea) => {
              this.lista = datatarea;
              this.layoutService.updatePreloaderState('hide');
              this.loadCompleted = true;
          },
          (error) => {
              this.layoutService.updatePreloaderState('hide');
              this.alertService.error(error, 5000);
          });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaTareaComponent, {
      data: [undefined, this.lista, this.trabajo.id],
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
      data: [x, this.lista, this.trabajo.id],
      width: '600px',
    });
  }

  nuevoPuntoContol() {
      console.log('NUEVO PUNTO CONTROL');
      console.log(this.trabajo);
      const dialog = this.dialog.open(AltaPuntocontrolComponent, {
      data: [undefined, this.trabajo],
      width: '600px',
    });
  }

  editarPuntoControl(p: PuntoControl) {

  }

  tareaCompleta(x: Tarea) {
      x.completa = !x.completa;

      x.puntoControl.paraVerificar = true;
      this.lista.forEach(
          (element) => {
              if ((element.puntoControl.id === x.puntoControl.id) && ((!element.completa) || (element.necesitaVerificacion && !element.verificada))) {
                  console.log(element.puntoControl);
                  console.log(x.puntoControl);
                  x.puntoControl.paraVerificar = false;
              }
          }
      );

      console.log('TAREA COMPLETA');
      console.log(x.puntoControl);
      this.puntoControlService.edit(x.puntoControl).subscribe();
      this.tareaService.edit(x).subscribe(
          (data) => {
              this.onChangeParaFinalizarTrabajo.emit(x.puntoControl.paraVerificar);
          },
      (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
      });
      //console.log(paraFinalizar);
  }

    tareaVerificada(x: Tarea) {
        x.verificada = !x.verificada;

        x.puntoControl.paraVerificar = true;
        this.lista.forEach(
            (element) => {
                if ((element.puntoControl === x.puntoControl) &&  ((!element.completa) || (element.necesitaVerificacion && !element.verificada))) {
                    element.puntoControl.paraVerificar = false;
                }
            }
        );

        console.log('TAREA COMPLETA');
        console.log(x.puntoControl);
        this.puntoControlService.edit(x.puntoControl).subscribe();
        this.tareaService.edit(x).subscribe(
            (data) => {
                this.onChangeParaFinalizarTrabajo.emit(x.puntoControl.paraVerificar);
            },
            (error) => {
                this.layoutService.updatePreloaderState('hide');
                this.alertService.error(error, 5000);
            });
    }

  verRegistros(x: Tarea) {
      this.router.navigate(['/app/registros/listaRegistros/', x.id]);
  }

  verMateriales(x: Tarea) {
        this.router.navigate(['/app/tareas/listaTareaMateriales/', x.id]);
  }

}
