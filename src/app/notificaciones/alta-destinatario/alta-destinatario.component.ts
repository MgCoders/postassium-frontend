import { Component, Inject, OnInit } from '@angular/core';
import { NotificacionesService } from '../../_services/notificaciones.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { NotificacionDestinatario } from '../../_models/NotificacionDestinatario';
import { LayoutService } from '../../layout/layout.service';
import { NotificacionDestinatarioImp } from '../../_models/NotificacionDestinatarioImp';
import { Usuario } from '../../_models/Usuario';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-destinatario',
  templateUrl: './alta-destinatario.component.html',
  styleUrls: ['./alta-destinatario.component.scss']
})
export class AltaDestinatarioComponent implements OnInit {

  public destinatarioActual: NotificacionDestinatario;
  public usuarioActual: Usuario;
  public notificacionesTipos: string[] = Object.keys(NotificacionDestinatario.TipoEnum  );

  public usuarioFC = new FormControl('', [Validators.required]);
  public tipoFC = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<AltaDestinatarioComponent>,
              @Inject(MAT_DIALOG_DATA) public destinatario: NotificacionDestinatario,
              private notificacionesService: NotificacionesService,
              private alertService: AlertService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    if (this.destinatario.id == null) {
      this.destinatarioActual = {} as NotificacionDestinatario;
      this.usuarioActual = {} as Usuario;
    } else {
      this.destinatarioActual = new NotificacionDestinatarioImp(this.destinatario);
      this.usuarioActual = this.destinatario.usuario;
    }
  }

  guardar() {
    this.destinatarioActual.usuario = this.usuarioActual;

    this.layoutService.updatePreloaderState('active');
    if (this.destinatario.id == null) {
      this.notificacionesService.create(this.destinatarioActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Destinatario agregado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.notificacionesService.edit(this.destinatarioActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Destinatario actualizado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }

  usuarioOnChange(u: Usuario) {
    this.usuarioActual = u;
  }
}
