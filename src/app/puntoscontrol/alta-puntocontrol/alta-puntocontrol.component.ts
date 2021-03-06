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
  templateUrl: './alta-puntocontrol.component.html',
  styleUrls: ['./alta-puntocontrol.component.scss']
})
export class AltaPuntocontrolComponent implements OnInit {

  public puntoControlActual: PuntoControl;
  public responsableActual: Usuario;
  public responsable2Actual: Usuario;

  constructor(
      public dialogRef: MatDialogRef<AltaPuntocontrolComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [PuntoControl, Trabajo],
      private puntoControlService: PuntoControlService,
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    if (this.data[0] === undefined) {
      this.puntoControlActual = {} as PuntoControl;
      this.responsableActual = {} as Usuario;
      this.responsable2Actual = {} as Usuario;
      this.puntoControlActual.trabajo = this.data[1];
      this.puntoControlActual.orden = 2;
      this.puntoControlActual.verificado = false;
      this.puntoControlActual.verificado2 = false;
      this.puntoControlActual.paraVerificar = false;
    } else {
      this.puntoControlActual = new PuntoControlImp(this.data[0]);
      this.responsableActual = this.data[0].responsable;
      this.responsable2Actual = this.data[0].responsable;
    }

  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (this.data[0] === undefined) {
      this.puntoControlService.create(this.puntoControlActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Punto de control agregado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
              this.layoutService.updatePreloaderState('hide');
              this.alertService.error(error, 5000);
          });
    } else {
      this.puntoControlService.edit(this.puntoControlActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Punto de control actualizado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }

  resposableOnChange(x: Usuario) {
    this.puntoControlActual.responsable = x;
  }

    resposable2OnChange(x: Usuario) {
        this.puntoControlActual.responsable2 = x;
    }
}
