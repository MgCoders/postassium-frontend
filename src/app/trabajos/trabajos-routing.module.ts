import { Routes, RouterModule } from '@angular/router';

import { DetalleTrabajosComponent } from './detalle-trabajos/detalle-trabajos.component';
import { TrabajosComponent } from './trabajos.component';
import {MonitorFacturacionTrabajosComponent} from './monitorfacturacion-trabajos/monitorfacturacion-trabajos.component';
import {AltaTrabajosComponent} from "./alta-trabajos/alta-trabajos.component";

export const TrabajosRoutes: Routes = [
  {
    path: '',
    component: TrabajosComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'detalle/:id', component: DetalleTrabajosComponent },
      { path: 'alta', component: AltaTrabajosComponent },
      {path: 'monitorfacturacion/:tipo', component: MonitorFacturacionTrabajosComponent}
    ]
  }
];

export const TrabajosRoutingModule = RouterModule.forChild(TrabajosRoutes);
