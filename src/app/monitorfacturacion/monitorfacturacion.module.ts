import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ListaMonitorFacturacionComponent
} from './lista-monitorfacturacion/lista-monitorfacturacion.component';
import { PuntoControlService } from '../_services/punto-control.services';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import {MonitorFacturacionRoutingModule} from './monitorfacturacion-routing.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MonitorFacturacionComponent} from './monitorfacturacion.component';
import {TrabajoService} from "../_services/trabajo.service";
import {AltaMonitorFacturacionComponent} from "./alta-monitorfacturacion/alta-monitorfacturacion.component";

@NgModule({
  imports: [
    CommonModule,
    MonitorFacturacionRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [TrabajoService, AlertService, LayoutService],
  declarations: [ListaMonitorFacturacionComponent, MonitorFacturacionComponent, AltaMonitorFacturacionComponent],
  entryComponents: [
    AltaMonitorFacturacionComponent,
  ],
})

export class MonitorFacturacionModule { }
