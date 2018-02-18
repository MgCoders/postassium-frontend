import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

import { TareasComponent } from './tareas.component';
import { TareasRoutingModule } from './tareas-routing.module';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { SelectTareaComponent } from './select-tarea/select-tarea.component';
import { AltaTareaComponent } from './alta-tarea/alta-tarea.component';

import { TareaService } from '../_services/tarea.service';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { AltaPuntocontrolComponent } from '../puntoscontrol/alta-puntocontrol/alta-puntocontrol.component';
import { PuntosControlModule } from '../puntoscontrol/puntoscontrol.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TareasRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    PuntosControlModule
  ],

  declarations: [
    TareasComponent,
    ListaTareasComponent,
    SelectTareaComponent,
    AltaTareaComponent
  ],

  exports: [
    SelectTareaComponent
  ],

  providers: [
    TareaService,
    AlertService,
    LayoutService,
  ],

  entryComponents: [
    AltaTareaComponent,
    AltaPuntocontrolComponent
  ],
})
export class TareasModule { }
