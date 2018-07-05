import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { Tarea } from '../../_models/Tarea';
import { Trabajo } from '../../_models/Trabajo';
import { AltaPuntocontrolComponent } from '../../puntoscontrol/alta-puntocontrol/alta-puntocontrol.component';
import { PuntoControl } from '../../_models/PuntoControl';
import { TrabajoService } from '../../_services/trabajo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-trabajos',
  templateUrl: './detalle-trabajos.component.html',
  styleUrls: ['./detalle-trabajos.component.scss']
})
export class DetalleTrabajosComponent implements OnInit {

  public lista: Tarea[];
  public trabajo: Trabajo;
  public success: boolean;
  public idTrabajo: number;
  public paraFinalizarTrabajo: boolean;

  constructor(public dialog: MatDialog,
              private tareaService: TareaService,
              private trabajoService: TrabajoService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router,
              private layoutService: LayoutService) {
      this.success = false;
  }

  ngOnInit() {

    this.lista = new Array();
    this.route.params.subscribe((params) => {
        console.log(+params['id']);
        this.idTrabajo = +params['id'];
        console.log(this.idTrabajo);

    });

    console.log(this.idTrabajo);

    this.layoutService.updatePreloaderState('active');
    // TODO pasar por parámetro el id del trabajo
    this.trabajoService.get(this.idTrabajo).subscribe(
      (data) => {
        this.trabajo = data;
        this.success = true;
        console.log(data);
        this.layoutService.updatePreloaderState('hide');

      },
      (error) => {
        this.layoutService.updatePreloaderState('hide');
        this.alertService.error(error, 5000);
      });
    console.log('BBBB');
    this.tareaService.getAllByTrabajo(this.idTrabajo).subscribe(
      (data) => {
        this.lista = data;
        this.layoutService.updatePreloaderState('hide');
      },
      (error) => {
        this.layoutService.updatePreloaderState('hide');
        this.alertService.error(error, 5000);
      });
  }

  monitorFacturacion() {
      this.router.navigate(['/app/trabajos/monitorfacturacion/']);
  }


  finalizarTrabajo() {
      this.trabajo.estado = 'PENDIENTE_ASIGNACION_VALORES';
      this.trabajoService.edit(this.trabajo).subscribe();
  }

    onChangeParaFinalizarTrabajo(paraFinalizar: boolean) {
      console.log('PARA FINALIZAR');
      console.log(paraFinalizar);
      this.paraFinalizarTrabajo = paraFinalizar;
    }
}
