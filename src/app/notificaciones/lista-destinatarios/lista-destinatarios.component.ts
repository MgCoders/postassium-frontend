import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../_services/notificaciones.service';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { MatDialog } from '@angular/material';
import { NotificacionDestinatario } from '../../_models/NotificacionDestinatario';
import { AltaDestinatarioComponent } from '../alta-destinatario/alta-destinatario.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-lista-destinatarios',
  templateUrl: './lista-destinatarios.component.html',
  styleUrls: ['./lista-destinatarios.component.scss']
})
export class ListaDestinatariosComponent implements OnInit {

  public destinatarios: NotificacionDestinatario[];

  constructor(public dialog: MatDialog,
              private notificacionesService: NotificacionesService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // this.layoutService.updatePreloaderState('active');
    this.destinatarios = new Array();
    this.notificacionesService.getAll().subscribe(
        (data) => {
          this.destinatarios = data;
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    // this.layoutService.updatePreloaderState('hide');
  }

  nuevo() {
    const dialog = this.dialog.open(AltaDestinatarioComponent, {
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

  editar(d: NotificacionDestinatario) {
    const dialog = this.dialog.open(AltaDestinatarioComponent, {
      data: d,
      width: '600px',
    });
    dialog.afterClosed().subscribe(
        (result) => {
          if (result === 1) {
            this.loadData();
          }
        });
  }

  eliminar(d: NotificacionDestinatario) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar el destinatario ' + d.usuario.email +  ' para ' + d.tipo +  '?',
    });

    dialogRef.afterClosed().subscribe(
        (result) => {
          if (result) {
            this.notificacionesService.delete(d.id).subscribe(
                (data) => {
                  this.loadData();
                },
                (error) => {
                  this.alertService.error(error, 5000);
                });
            this.alertService.success('Cargo eliminado correctamente.', 3000);
          }
        });
  }
}
