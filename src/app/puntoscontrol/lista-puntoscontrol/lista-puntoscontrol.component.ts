import { Component, OnInit } from '@angular/core';
import { PuntoControl } from '../../_models/PuntoControl';
import { PuntoControlService } from '../../_services/punto-control.services';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-lista-puntoscontrol',
  templateUrl: './lista-puntoscontrol.component.html',
  styleUrls: ['./lista-puntoscontrol.component.scss']
})
export class ListaPuntosControlComponent implements OnInit {

  public puntosControl: PuntoControl[];
  // public trabajo: Trabajo;

  constructor(public dialog: MatDialog,
              private puntoControlService: PuntoControlService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.puntosControl = new Array();
    this.layoutService.updatePreloaderState('active');
    this.puntoControlService.getByTrabajo(1).subscribe( // TODO Pasar el id de trabaja actual.
        (data) => {
          this.puntosControl = data;
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.layoutService.updatePreloaderState('hide');
  }

  nuevo() { }

  editar() { }

  eliminar() { }

}
