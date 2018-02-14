
import { RouterModule, Routes } from '@angular/router';
import {
    ListaMonitorFacturacionComponent
} from './lista-monitorfacturacion/lista-monitorfacturacion.component';
import { MonitorFacturacionComponent } from './monitorfacturacion.component';

export const MonitorFacturacionRoutes: Routes = [
    {
        path: '',
        component: MonitorFacturacionComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'lista', component: ListaMonitorFacturacionComponent }
        ]
    }
]

export const MonitorFacturacionRoutingModule = RouterModule.forChild(MonitorFacturacionRoutes);
