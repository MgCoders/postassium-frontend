import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatDatepickerModule
} from '@angular/material';

import {
  MatDialogModule
} from '@angular/material/dialog';

import { TrabajosComponent } from './trabajos.component';
import { TrabajosRoutingModule } from './trabajos-routing.module';
import { DetalleTrabajosComponent } from './detalle-trabajos/detalle-trabajos.component';

import { TareaService } from '../_services/tarea.service';
import { TrabajoService } from '../_services/trabajo.service';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { AltaMonitorFacturacionTrabajosComponent } from './alta-monitorfacturacion-trabajos/alta-monitorfacturacion-trabajos.component';
import { MonitorFacturacionTrabajosComponent } from './monitorfacturacion-trabajos/monitorfacturacion-trabajos.component';
import { AltaTrabajosComponent } from './alta-trabajos/alta-trabajos.component';
import { ClienteService } from '../_services/cliente.service';
import {EquipoService} from '../_services/equipo.service';
import {AltaEquipoComponent} from './alta-equipo/alta-equipo.component';
import {InformacionReciboComponent} from './informacion-recibo/informacion-recibo.component';
import {TareasComponent} from '../tareas/tareas.component';
import {ListaTareasComponent} from '../tareas/lista-tareas/lista-tareas.component';
import {TareasModule} from '../tareas/tareas.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TrabajosRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule
  ],

  declarations: [
    TrabajosComponent,
    DetalleTrabajosComponent,
    MonitorFacturacionTrabajosComponent,
    AltaTrabajosComponent,
    AltaMonitorFacturacionTrabajosComponent,
    InformacionReciboComponent,
    AltaEquipoComponent
  ],
  providers: [
    TareaService,
    ClienteService,
    TrabajoService,
    AlertService,
    LayoutService,
    EquipoService,
    DatePipe
  ],
  entryComponents: [
    AltaMonitorFacturacionTrabajosComponent,
    InformacionReciboComponent,
    AltaEquipoComponent
  ],

})
export class TrabajosModule { }