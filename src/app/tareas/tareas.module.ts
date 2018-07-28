import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

import {
  MatDialogModule
} from '@angular/material/dialog';

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
import { TrabajoService } from '../_services/trabajo.service';
import { ListaTareaMaterialesComponent } from './lista-tareamateriales/lista-tareamateriales.component';
import { AltaTareaMaterialComponent } from './alta-tareamaterial/alta-tareamaterial.component';
import { MaterialesModule } from '../materiales/materiales.module';

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
    PuntosControlModule,
    MaterialesModule,
    MatCheckboxModule
  ],

  declarations: [
    TareasComponent,
    ListaTareasComponent,
    SelectTareaComponent,
    AltaTareaComponent,
    ListaTareaMaterialesComponent,
    AltaTareaMaterialComponent,
  ],

  exports: [
    SelectTareaComponent,
      ListaTareasComponent
  ],

  providers: [
    TareaService,
    AlertService,
    LayoutService,
    TrabajoService
  ],

  entryComponents: [
    AltaTareaComponent,
    AltaPuntocontrolComponent,
    AltaTareaMaterialComponent
  ],
})
export class TareasModule { }
