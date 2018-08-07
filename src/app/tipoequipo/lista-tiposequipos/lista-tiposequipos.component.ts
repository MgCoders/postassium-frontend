import { Component, OnInit } from '@angular/core';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { TipoMaterialService } from '../../_services/tipomaterial.service';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { AltaTipoEquipoComponent } from '../alta-tipoequipo/alta-tipoequipo.component';
import { TipoEquipo } from '../../_models/TipoEquipo';
import { TipoEquipoService } from '../../_services/tipoequipo.service';

@Component({
  selector: 'app-lista-tiposmateriales',
  templateUrl: './lista-tiposequipos.component.html',
  styleUrls: ['./lista-tiposequipos.component.scss']
})
export class ListaTiposEquiposComponent implements OnInit {

  tiposEquipos: TipoEquipo[];

  constructor(
      public dialog: MatDialog,
      private tipoEquipoService: TipoEquipoService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.updatePreloaderState('active');
    this.loadData();
  }

  loadData() {
    this.tiposEquipos = new Array();
    this.tipoEquipoService.getAll().subscribe(
        (data) => {
          this.tiposEquipos = data;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaTipoEquipoComponent, {
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

  editar(tp: TipoMaterial) {
    const dialog = this.dialog.open(AltaTipoEquipoComponent, {
      data: tp,
      width: '600px',
    });
    dialog.afterClosed().subscribe(
        (result) => {
          if (result === 1) {
            this.loadData();
          }
        });
  }

  eliminar(tp: TipoEquipo) {

  }

}
