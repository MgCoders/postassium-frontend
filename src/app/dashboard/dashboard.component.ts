import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';
import {TrabajoService} from "../_services/trabajo.service";
import {LayoutService} from "../layout/layout.service";
import {AlertService} from "../_services/alert.service";
import {APPCONFIG} from "../config";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  config = CHARTCONFIG;


  constructor(private trabajoService: TrabajoService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  private total: number;
  private totalEnProceso: number;
  private totalFinalizados: number;
  private totalParaFacturar: number;
  private totalParaRemito: number;
  private totalAsignacionValores: number;
  private totalEnEspera: number;

  ngOnInit() {
    this.total = 0;
    this.totalEnProceso = 0;
    this.totalFinalizados = 0;
    this.totalParaFacturar = 0;
    this.totalParaRemito = 0;
    this.totalAsignacionValores = 0;
    this.totalEnEspera = 0;
    this.layoutService.updatePreloaderState('active');
    this.trabajoService.countAll().subscribe(
        (data) => {
            if (data != null) {
                this.total = data;
            }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByEstados('EN_PROCESO').subscribe(
        (data) => {
          if (data != null) {
            this.totalEnProceso = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByEstados('FINALIZADO').subscribe(
        (data) => {
          if (data != null) {
            this.totalFinalizados = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByEstados('PENDIENTE_FACTURA').subscribe(
        (data) => {
          if (data != null) {
            this.totalParaFacturar = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByEstados('PENDIENTE_REMITO').subscribe(
        (data) => {
          if (data != null) {
            this.totalParaRemito = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByEstados('PENDIENTE_ASIGNACION_VALORES,PENDIENTE_REMITO').subscribe(
        (data) => {
          if (data != null) {
            this.totalAsignacionValores = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByEstados('EN_ESPERA').subscribe(
        (data) => {
          if (data != null) {
            this.totalEnEspera = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.layoutService.updatePreloaderState('hide');
  }


}
