import { Component, OnInit } from '@angular/core';
import { Material } from '../../_models/Material';
import { MatDialog } from '@angular/material';
import { MaterialService } from '../../_services/material.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { AltaMaterialComponent } from '../alta-material/alta-material.component';

@Component({
  selector: 'app-lista-materiales',
  templateUrl: './lista-materiales.component.html',
  styleUrls: ['./lista-materiales.component.scss']
})
export class ListaMaterialesComponent implements OnInit {

  materiales: Material[];

  constructor(
      public dialog: MatDialog,
      private materialService: MaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.layoutService.updatePreloaderState('active');
    this.loadData();
  }

  loadData() {
    this.materiales = new Array();
    this.materialService.getAll().subscribe(
        (data) => {
          this.materiales = data;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaMaterialComponent, {
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

  editar(m: Material) {
    const dialog = this.dialog.open(AltaMaterialComponent, {
      data: m,
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
