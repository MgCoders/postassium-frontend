import { Component, OnInit } from '@angular/core';
import { Rubro } from '../../_models/Rubro';
import { RubroService } from '../../_services/rubro.service';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { AltaRubroComponent } from '../alta-rubro/alta-rubro.component';

@Component({
  selector: 'app-lista-rubro',
  templateUrl: './lista-rubros.component.html',
  styleUrls: ['./lista-rubros.component.scss']
})
export class ListaRubrosComponent implements OnInit {

  public lista: Rubro[];

  constructor(public dialog: MatDialog,
              private rubroService: RubroService,
              private as: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
      // this.layoutService.updatePreloaderState('active');
      this.lista = new Array();
      this.rubroService.getAll().subscribe(
          (data) => {
              this.lista = data;
          },
          (error) => {
              this.as.error(error, 5000);
          });
      // this.layoutService.updatePreloaderState('hide');
  }

  nuevo() {
    const dialog = this.dialog.open(AltaRubroComponent, {
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

  eliminar(x: Rubro) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar el rubro ' + x.nombre + '?',
    });

    dialogRef.afterClosed().subscribe(
        (result) => {
          if (result) {
            this.rubroService.delete(x.id).subscribe(
                (data) => {
                    this.loadData();
                },
                (error) => {
                    this.as.error(error, 5000);
                });
            this.as.success('Cargo eliminado correctamente.', 3000);
          }
        });
  }

  editar(x: Rubro) {
    const dialog = this.dialog.open(AltaRubroComponent, {
      data: x,
      width: '600px',
    });
    dialog.afterClosed().subscribe(
          (result) => {
              if (result === 1) {
                  this.loadData();
              }
          });
  }

}
