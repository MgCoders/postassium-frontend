import { Routes, RouterModule } from '@angular/router';

import { DetalleTrabajosComponent } from './detalle-trabajos/detalle-trabajos.component';
import { TrabajosComponent } from './trabajos.component';

export const TrabajosRoutes: Routes = [
  {
    path: '',
    component: TrabajosComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'detalle', component: DetalleTrabajosComponent }
    ]
  }
];

export const TrabajosRoutingModule = RouterModule.forChild(TrabajosRoutes);
