import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { ProyectoService } from '../../_services/proyecto.service';
import { AlertService } from '../../_services/alert.service';
import { Proyecto } from '../../_models/models';
import {TrabajoService} from '../../_services/trabajo.service';
import {Trabajo} from '../../_models/Trabajo';
import {PuntoControlService} from '../../_services/punto-control.services';
import {PuntoControl} from '../../_models/PuntoControl';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss']
})

export class GanttComponent implements OnInit {

  public timelineChartData: any;
  public listaTrabajos: Trabajo[];
  public success: boolean;

  @ViewChild('gantt') gantt;

  constructor(private service: TrabajoService,
              private puntosControlService: PuntoControlService,
              private as: AlertService) { }

  ngOnInit() {
    this.success = false;
    this.listaTrabajos = new Array();
    const dataTable: any[] = new Array();
    dataTable.push(['Task ID', 'Task Name', 'Fecha Inicio', 'Fecha Fin', 'Duración', 'Percent Complete', 'Dependencies']);


    this.service.getByEstados('EN_PROCESO').subscribe(
        (data) => {
          data.forEach( (element) => {
            dataTable.push([element.numeroTrabajo, element.numeroTrabajo, this.getDate(element.fechaRecepcion), this.getDate(element.fechaProvistaEntrega), 1, element.porcentajeCompleto, null]);
          });
          this.timelineChartData = {
            chartType: 'Gantt',
            dataTable,
            options: { gantt: { criticalPathEnabled: false, language: 'ja' }}

          };

        },
        (error) => {
          this.as.error(error, 5000);
        });


    console.log(this.gantt);
  }

  getDate(date: string): Date {
    const dateArray: string[] = date.split(' ')[0].split('-');
    return new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0]);
  }

}
