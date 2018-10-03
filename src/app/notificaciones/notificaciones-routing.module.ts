import { NotificacionesComponent } from './notificaciones.component';
import { ListaDestinatariosComponent } from './lista-destinatarios/lista-destinatarios.component';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminGuard } from '../_guards/auth.superadmin.guard';
/**
 * Created by pablo on 28/06/18.
 */
export const NotificacionesRoutes: Routes = [
    {
        path: '',
        component: NotificacionesComponent,
        canActivate: [SuperAdminGuard],
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'destinatarios', component: ListaDestinatariosComponent }
        ]
    }
];

export const NotificacionesRoutingModule = RouterModule.forChild(NotificacionesRoutes);
