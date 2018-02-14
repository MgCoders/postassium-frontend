import { Component, OnInit } from '@angular/core';
import { PuntoControl } from '../../_models/PuntoControl';
import { PuntoControlService } from '../../_services/punto-control.services';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import {TrabajoService} from "../../_services/trabajo.service";
import {Trabajo} from "../../_models/Trabajo";

@Component({
  selector: 'app-lista-monitorfacturacion',
  templateUrl: './lista-monitorfacturacion.component.html',
  styleUrls: ['./lista-monitorfacturacion.component.scss']
})
export class ListaMonitorFacturacionComponent implements OnInit {

  public lista: Trabajo[];
  // public trabajo: Trabajo;

  constructor(public dialog: MatDialog,
              private puntoControlService: TrabajoService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.lista = new Array();
    this.layoutService.updatePreloaderState('active');
    this.puntoControlService.getByEstado('PARA_FACTURAR').subscribe(
        (data) => {
          this.lista = data;
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
