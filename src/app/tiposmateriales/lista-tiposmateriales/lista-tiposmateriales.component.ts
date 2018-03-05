import { Component, OnInit } from '@angular/core';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { TipoMaterialService } from '../../_services/tipomaterial.service';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { AltaTipoMaterialComponent } from '../alta-tipomaterial/alta-tipomaterial.component';

@Component({
  selector: 'app-lista-tiposmateriales',
  templateUrl: './lista-tiposmateriales.component.html',
  styleUrls: ['./lista-tiposmateriales.component.scss']
})
export class ListaTiposMaterialesComponent implements OnInit {

  tiposMateriales: TipoMaterial[];

  constructor(
      public dialog: MatDialog,
      private tipoMaterialService: TipoMaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.updatePreloaderState('active');
    this.loadData();
  }

  loadData() {
    this.tiposMateriales = new Array();
    this.tipoMaterialService.getAll().subscribe(
        (data) => {
          this.tiposMateriales = data;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaTipoMaterialComponent, {
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
    const dialog = this.dialog.open(AltaTipoMaterialComponent, {
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

  eliminar(tp: TipoMaterial) {

  }

}
