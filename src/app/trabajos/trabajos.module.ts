import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
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
import { EquipoService } from '../_services/equipo.service';
import { AltaEquipoComponent } from './alta-equipo/alta-equipo.component';
import { InformacionReciboComponent } from './informacion-recibo/informacion-recibo.component';
import { TareasComponent } from '../tareas/tareas.component';
import { ListaTareasComponent } from '../tareas/lista-tareas/lista-tareas.component';
import { TareasModule } from '../tareas/tareas.module';
import { AltaTareaMaterialComponent } from '../tareas/alta-tareamaterial/alta-tareamaterial.component';
import { AltaTareaComponent } from '../tareas/alta-tarea/alta-tarea.component';
import { AltaPuntocontrolComponent } from '../puntoscontrol/alta-puntocontrol/alta-puntocontrol.component';
import { TiposEquiposModule } from '../tipoequipo/tiposequipos.module';
import { CustomDatePipe } from '../_pipes/customDate.pipe';
import { FacturaService } from '../_services/factura.service';
import { TrabajoFacturaNuevaComponent } from './trabajo-factura-nueva/trabajo-factura-nueva.component';
import { TrabajoFacturasListaComponent } from './trabajo-facturas-lista/trabajo-facturas-lista.component';
import { IvafacturaSelectComponent } from './ivafactura-select/ivafactura-select.component';
import { FormaPagoFacturaSelectComponent } from './forma-pago-factura-select/forma-pago-factura-select.component';
import { MonedaFacturaSelectComponent } from './moneda-factura-select/moneda-factura-select.component';
import { TrabajoFacturaViewComponent } from './trabajo-factura-view/trabajo-factura-view.component';
import { PuntosControlModule } from '../puntoscontrol/puntoscontrol.module';
import {VerificarPuntocontrolComponent} from "../puntoscontrol/verificar-puntocontrol/verificar-puntocontrol.component";
import {MarcasModule} from "../marcas/marcas.module";
import {UsuariosModule} from "../usuarios/usuarios.module";

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
    MatDatepickerModule,
    TareasModule,
    PuntosControlModule,
    TiposEquiposModule,
    MarcasModule,
      UsuariosModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],

  declarations: [
    TrabajosComponent,
    DetalleTrabajosComponent,
    MonitorFacturacionTrabajosComponent,
    AltaTrabajosComponent,
    AltaMonitorFacturacionTrabajosComponent,
    InformacionReciboComponent,
    AltaEquipoComponent,
    TrabajoFacturasListaComponent,
    TrabajoFacturaNuevaComponent,
    IvafacturaSelectComponent,
    FormaPagoFacturaSelectComponent,
    MonedaFacturaSelectComponent,
    CustomDatePipe,
    MonedaFacturaSelectComponent,
    TrabajoFacturaViewComponent
  ],
  providers: [
    TareaService,
    ClienteService,
    TrabajoService,
    AlertService,
    LayoutService,
    EquipoService,
    DatePipe,
    CustomDatePipe,
    FacturaService
  ],
  entryComponents: [
    AltaMonitorFacturacionTrabajosComponent,
    InformacionReciboComponent,
    AltaEquipoComponent,
    AltaTareaComponent,
    AltaPuntocontrolComponent,
    VerificarPuntocontrolComponent,
    AltaTareaMaterialComponent,
    TrabajoFacturaNuevaComponent,
    TrabajoFacturaViewComponent
  ],

})
export class TrabajosModule { }
