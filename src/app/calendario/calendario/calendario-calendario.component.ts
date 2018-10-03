import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { ProyectoService } from '../../_services/proyecto.service';
import { AlertService } from '../../_services/alert.service';
import { Proyecto } from '../../_models/models';
import {TrabajoService} from '../../_services/trabajo.service';
import {Trabajo} from '../../_models/Trabajo';
import {PuntoControlService} from '../../_services/punto-control.services';
import {PuntoControl} from '../../_models/PuntoControl';
import {
  ChangeDetectionStrategy,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent, CalendarMonthViewComponent
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#2e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendario-calendario',
  templateUrl: './calendario-calendario.component.html',
  styleUrls: ['./calendario-calendario.component.scss']
})

export class CalendarioCalendarioComponent implements OnInit {

  view: string = 'month';

  viewDate: Date = new Date();

  public trabajos: Trabajo[];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[];


  @ViewChild(CalendarMonthViewComponent) calendar: CalendarMonthViewComponent;

  activeDayIsOpen: boolean = false;

  constructor(private service: TrabajoService,
              private as: AlertService) {}

  ngOnInit() {
    this.events = [];

    this.service.getByEstados('EN_PROCESO').subscribe(
        (data) => {
          data.forEach( (element) => {
            let event: CalendarEvent;
            event = {
              start: this.getDate(element.fechaRecepcion),
              end: this.getDate(element.fechaProvistaEntrega),
              title: element.numeroTrabajo + ' - ' + element.cliente.nombreEmpresa,
              color: {
                primary: '#' +(0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6),
                secondary: '#FAE3E3'
              }
            };
            this.events.push(event);
            this.activeDayIsOpen = false;
            this.refresh.next();


          });

        },
        (error) => {
          this.as.error(error, 5000);
        });

    console.log(this.events);

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  getDate(date: string): Date {
    const dateArray: string[] = date.split(' ')[0].split('-');
    if (date.split(' ')[1]) {
      const hourArray = date.split(' ')[1].split(':');
      return new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0], +hourArray[0], +hourArray[1]);
    }
    return new Date(+dateArray[2], +dateArray[1] - 1, +dateArray[0]);
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }
}
