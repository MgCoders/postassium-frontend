import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PuntoControl } from '../../_models/PuntoControl';
import { PuntoControlService } from '../../_services/punto-control.services';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import {Trabajo} from '../../_models/Trabajo';
import {AltaPuntocontrolComponent} from '../alta-puntocontrol/alta-puntocontrol.component';

@Component({
  selector: 'app-lista-puntoscontrol',
  templateUrl: './lista-puntoscontrol.component.html',
  styleUrls: ['./lista-puntoscontrol.component.scss']
})
export class ListaPuntosControlComponent implements OnInit {

  @Input() puntosControl: PuntoControl[];
  @Input() trabajo: Trabajo;
  @Output() onChangeParaFinalizarTrabajo: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog,
              private puntoControlService: PuntoControlService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    //this.puntosControl = new Array();
    this.layoutService.updatePreloaderState('active');
    // this.puntoControlService.getByTrabajo(this.trabajo.id).subscribe( // TODO Pasar el id de trabaja actual.
    //     (data) => {
    //       this.puntosControl = data;
    //     },
    //     (error) => {
    //       this.alertService.error(error, 5000);
    //     });
    this.layoutService.updatePreloaderState('hide');
  }

  loadData() {
    this.puntoControlService.getByTrabajo(this.trabajo.id).subscribe( // TODO Pasar el id de trabaja actual.
        (data) => {
          this.puntosControl = data;
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {
    console.log('NUEVO PUNTO CONTROL');
    console.log(this.trabajo);
    const dialog = this.dialog.open(AltaPuntocontrolComponent, {
      data: [undefined, this.trabajo],
      width: '600px',
    });

    dialog.afterClosed().subscribe(
        (result) => {
          if (result) {
            this.loadData();
          }
        });
  }

  editar(x: PuntoControl) {
    console.log('NUEVO PUNTO CONTROL');
    console.log(this.trabajo);
    const dialog = this.dialog.open(AltaPuntocontrolComponent, {
      data: [x, this.trabajo],
      width: '600px',
    });

    dialog.afterClosed().subscribe(
        (result) => {
          if (result) {
            this.loadData();
          }
        });
  }

  eliminar(x: PuntoControl) { }

  verificar(x: PuntoControl) {
    x.verificado = !x.verificado;

    let paraFinalizar = true;
    this.puntosControl.forEach(
        (element) => {
          if (!element.verificado) {
            paraFinalizar = false;
          }
        }
    );

    this.puntoControlService.edit(x).subscribe(
          (data) => {
              this.onChangeParaFinalizarTrabajo.emit(paraFinalizar);
          },
          (error) => {
              this.alertService.error(error, 5000);
          });

    console.log('PUNTO CONTROL COMPLETO');
    console.log(paraFinalizar);

  }

}
