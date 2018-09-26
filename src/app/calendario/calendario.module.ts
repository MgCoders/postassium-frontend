import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTooltipModule,
  MatDialogModule,
} from '@angular/material';

import {CalendarioRoutingModule} from './calendario-routing.module';
import {CalendarioComponent} from './calendario.component';
import {GanttComponent} from './gantt/gantt.component';

import { ProyectoService } from '../_services/proyecto.service';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {TrabajoService} from "../_services/trabajo.service";
import {PuntoControlService} from "../_services/punto-control.services";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CalendarModule} from "angular-calendar";
import {CalendarioCalendarioComponent} from "./calendario/calendario-calendario.component";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CalendarioRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    Ng2GoogleChartsModule,
    MatDialogModule,
     CalendarModule.forRoot()
  ],

  declarations: [
      CalendarioCalendarioComponent,
    CalendarioComponent,
    GanttComponent
  ],

    providers: [
    TrabajoService,
    PuntoControlService,
    AlertService,
    LayoutService,
  ],

})
export class CalendarioModule { }
