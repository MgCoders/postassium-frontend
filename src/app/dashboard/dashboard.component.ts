import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';
import {TrabajoService} from '../_services/trabajo.service';
import {LayoutService} from '../layout/layout.service';
import {AlertService} from '../_services/alert.service';
import {APPCONFIG} from '../config';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  config = CHARTCONFIG;

  constructor(private trabajoService: TrabajoService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

    public total: number;
    public totalEnProceso: number;
    public totalFinalizados: number;
    public totalParaFacturar: number;
    public totalParaRemito: number;
    public totalAsignacionValores: number;
    public totalEnEspera: number;
    public totalReparaciones: number;
    public totalProducciones: number;

  ngOnInit() {
    this.total = 0;
    this.totalEnProceso = 0;
    this.totalFinalizados = 0;
    this.totalParaFacturar = 0;
    this.totalParaRemito = 0;
    this.totalAsignacionValores = 0;
    this.totalEnEspera = 0;
    this.totalReparaciones = 0;
    this.totalProducciones = 0;
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
    this.trabajoService.countByCampo('estado', 'EN_PROCESO').subscribe(
        (data) => {
          if (data != null) {
            this.totalEnProceso = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByCampo('estado', 'FINALIZADO').subscribe(
        (data) => {
          if (data != null) {
            this.totalFinalizados = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByCampo('estado', 'PENDIENTE_FACTURA').subscribe(
        (data) => {
          if (data != null) {
            this.totalParaFacturar = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByCampo('estado', 'PENDIENTE_REMITO').subscribe(
        (data) => {
          if (data != null) {
            this.totalParaRemito = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByCampo('estado', 'PENDIENTE_ASIGNACION_VALORES,PENDIENTE_REMITO').subscribe(
        (data) => {
          if (data != null) {
            this.totalAsignacionValores = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByCampo('estado', 'EN_ESPERA').subscribe(
        (data) => {
          if (data != null) {
            this.totalEnEspera = data;
          }
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
    this.trabajoService.countByCampo('esReparacion', 'true').subscribe(
          (data) => {
              if (data != null) {
                  this.totalReparaciones = data;
              }
          },
          (error) => {
              this.alertService.error(error, 5000);
          });

    this.trabajoService.countByCampo('esReparacion', 'false').subscribe(
          (data) => {
              if (data != null) {
                  this.totalReparaciones = data;
              }
          },
          (error) => {
              this.alertService.error(error, 5000);
          });

    this.layoutService.updatePreloaderState('hide');
  }

}
