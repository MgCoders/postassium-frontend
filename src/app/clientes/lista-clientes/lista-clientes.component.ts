import { Component, OnInit } from '@angular/core';
import { Material } from '../../_models/Material';
import { MatDialog } from '@angular/material';
import { MaterialService } from '../../_services/material.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { AltaClienteComponent } from '../alta-cliente/alta-cliente.component';
import {ClienteService} from "../../_services/cliente.service";
import {Cliente} from "../../_models/Cliente";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(
      public dialog: MatDialog,
      private clienteService: ClienteService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.updatePreloaderState('active');
    this.loadData();
  }

  loadData() {
    this.clientes = new Array();
    this.clienteService.getAll().subscribe(
        (data) => {
          this.clientes = data;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaClienteComponent, {
      data: {},
      width: '600px',
    });

    dialog.afterClosed().subscribe(
        (result) => {
          if (result === 1) {
            this.loadData();
          }
        });
  }

  editar(c: Cliente) {
    const dialog = this.dialog.open(AltaClienteComponent, {
      data: c,
      width: '600px',
    });
    dialog.afterClosed().subscribe(
        (result) => {
          if (result === 1) {
            this.loadData();
          }
        });
  }

  eliminar(m: Material) {

  }

}
