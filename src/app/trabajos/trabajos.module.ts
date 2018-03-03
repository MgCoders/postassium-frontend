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

import { TrabajosComponent } from './trabajos.component';
import { TrabajosRoutingModule } from './trabajos-routing.module';
import { DetalleTrabajosComponent } from './detalle-trabajos/detalle-trabajos.component';

import { TareaService } from '../_services/tarea.service';
import { TrabajoService } from '../_services/trabajo.service';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import {AltaMonitorFacturacionTrabajosComponent} from "./alta-monitorfacturacion-trabajos/alta-monitorfacturacion-trabajos.component";
import {MonitorFacturacionTrabajosComponent} from "./monitorfacturacion-trabajos/monitorfacturacion-trabajos.component";

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
    MatDialogModule
  ],

  declarations: [
    TrabajosComponent,
    DetalleTrabajosComponent,
    MonitorFacturacionTrabajosComponent,
    AltaMonitorFacturacionTrabajosComponent
  ],
  providers: [
    TareaService,
    TrabajoService,
    AlertService,
    LayoutService,
  ],
  entryComponents: [
    AltaMonitorFacturacionTrabajosComponent,
  ],

})
export class TrabajosModule { }
