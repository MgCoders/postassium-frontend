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
  MatTooltipModule,
  MatProgressSpinnerModule
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
import {AltaTrabajosComponent} from "./alta-trabajos/alta-trabajos.component";
import {ClienteService} from '../_services/cliente.service';
import { FacturaTrabajoComponent } from './factura-trabajo/factura-trabajo.component';
import { TrabajoFacturasListaComponent } from './trabajo-facturas-lista/trabajo-facturas-lista.component';
import { TrabajoFacturaNuevaComponent } from './trabajo-factura-nueva/trabajo-factura-nueva.component';
import { IvafacturaSelectComponent } from './ivafactura-select/ivafactura-select.component';
import { FormaPagoFacturaSelectComponent } from './forma-pago-factura-select/forma-pago-factura-select.component';
import { MonedaFacturaSelectComponent } from './moneda-factura-select/moneda-factura-select.component';

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
    MatProgressSpinnerModule
  ],

  declarations: [
    TrabajosComponent,
    DetalleTrabajosComponent,
    MonitorFacturacionTrabajosComponent,
    AltaTrabajosComponent,
    AltaMonitorFacturacionTrabajosComponent,
    FacturaTrabajoComponent,
    TrabajoFacturasListaComponent,
    TrabajoFacturaNuevaComponent,
    IvafacturaSelectComponent,
    FormaPagoFacturaSelectComponent,
    MonedaFacturaSelectComponent
  ],
  providers: [
    TareaService,
    ClienteService,
    TrabajoService,
    AlertService,
    LayoutService,
  ],
  entryComponents: [
    AltaMonitorFacturacionTrabajosComponent,
  ],

})
export class TrabajosModule { }
