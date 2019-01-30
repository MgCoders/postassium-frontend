import { Routes, RouterModule } from '@angular/router';

import { DetalleTrabajosComponent } from './detalle-trabajos/detalle-trabajos.component';
import { TrabajosComponent } from './trabajos.component';
import { MonitorFacturacionTrabajosComponent } from './monitorfacturacion-trabajos/monitorfacturacion-trabajos.component';
import { AltaTrabajosComponent } from './alta-trabajos/alta-trabajos.component';
import { TrabajoFacturasListaComponent } from './trabajo-facturas-lista/trabajo-facturas-lista.component';
import {RecuperarTrabajosComponent} from "./recuperar-trabajos/recuperar-trabajos.component";

export const TrabajosRoutes: Routes = [
  {
    path: '',
    component: TrabajosComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'detalle/:id', component: DetalleTrabajosComponent },
      { path: 'facturas/:id', component: TrabajoFacturasListaComponent },
      { path: 'altaTrabajo', component: AltaTrabajosComponent },
      { path: 'recuperarTrabajo/:id', component: RecuperarTrabajosComponent },
      {path: 'monitorfacturacion/:tipo', component: MonitorFacturacionTrabajosComponent}
    ]
  }
];

export const TrabajosRoutingModule = RouterModule.forChild(TrabajosRoutes);
