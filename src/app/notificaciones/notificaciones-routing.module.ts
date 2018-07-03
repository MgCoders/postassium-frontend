import { NotificacionesComponent } from './notificaciones.component';
import { ListaDestinatariosComponent } from './lista-destinatarios/lista-destinatarios.component';
import { AdminGuard } from '../_guards/admin.guard';
import { RouterModule, Routes } from '@angular/router';
/**
 * Created by pablo on 28/06/18.
 */
export const NotificacionesRoutes: Routes = [
    {
        path: '',
        component: NotificacionesComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'destinatarios', component: ListaDestinatariosComponent }
        ]
    }
];

export const NotificacionesRoutingModule = RouterModule.forChild(NotificacionesRoutes);
