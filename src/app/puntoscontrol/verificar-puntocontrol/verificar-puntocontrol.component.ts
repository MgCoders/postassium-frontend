import { Component, Inject, OnInit } from '@angular/core';
import { PuntoControl } from '../../_models/PuntoControl';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PuntoControlService } from '../../_services/punto-control.services';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { PuntoControlImp } from '../../_models/PuntoControlImp';
import { Usuario } from '../../_models/Usuario';
import { Trabajo } from '../../_models/Trabajo';

@Component({
  selector: 'app-alta-puntocontrol',
  templateUrl: './verificar-puntocontrol.component.html',
  styleUrls: ['./verificar-puntocontrol.component.scss']
})
export class VerificarPuntocontrolComponent implements OnInit {

  public puntoControlActual: PuntoControl;
  public responsableActual: Usuario;
  public pin: string;
  public verificacion: number;

  constructor(
      public dialogRef: MatDialogRef<VerificarPuntocontrolComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [PuntoControl, Trabajo],
      private puntoControlService: PuntoControlService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
      this.responsableActual = {} as Usuario;
      this.pin = '';
      if (this.data[0] === undefined) {
          this.puntoControlActual = {} as PuntoControl;

          this.puntoControlActual.trabajo = this.data[1];
          this.puntoControlActual.orden = 2;
        } else {
          this.puntoControlActual = new PuntoControlImp(this.data[0]);
        }
  }

  guardar() {
      console.log(this.responsableActual);
      this.layoutService.updatePreloaderState('active');
      this.puntoControlService.verificar(this.puntoControlActual, this.pin, this.verificacion).subscribe(
        (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.responsableActual = {} as Usuario;
            this.alertService.success('Punto de control verificado correctamente.', 3000);
            this.dialogRef.close(1);


        },
        (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
        });

  }

  resposableOnChange(x: Usuario) {
      if (!this.puntoControlActual.verificado) {
          this.puntoControlActual.responsable = x;
          this.verificacion = 1;
      } else {
          this.puntoControlActual.responsable2 = x;
          this.verificacion = 2;
      }

  }

    resposable2OnChange(x: Usuario) {
        this.puntoControlActual.responsable2 = x;
    }
}
