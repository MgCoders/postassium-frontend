import { Component, OnInit } from '@angular/core';
import { Rubro } from '../../_models/Rubro';
import { RubroService } from '../../_services/rubros.service';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { AltaCargoComponent } from '../../cargos/alta-cargo/alta-cargo.component';
import { AltaRubroComponent } from '../alta-rubro/alta-rubro.component';

@Component({
  selector: 'app-lista-rubro',
  templateUrl: './lista-rubros.component.html',
  styleUrls: ['./lista-rubros.component.scss']
})
export class ListaRubrosComponent implements OnInit {

  public lista: Rubro[];

  constructor(public dialog: MatDialog,
              private service: RubroService,
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
    const dialog = this.dialog.open(AltaRubroComponent, {
      data: [undefined, this.lista],
      width: '600px',
    });
  }

  Eliminar(x: Rubro) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar el rubro ' + x.nombre + '?',
    });

    dialogRef.afterClosed().subscribe(
        (result) => {
          if (result) {
            // TODO
            this.as.success('Cargo eliminado correctamente.', 3000);
          }
        });
  }

  Editar(x: Rubro) {
    const dialog = this.dialog.open(AltaRubroComponent, {
      data: [x, this.lista],
      width: '600px',
    });
  }

}
