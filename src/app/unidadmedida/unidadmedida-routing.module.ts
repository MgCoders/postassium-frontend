import { UnidadMedidaComponent } from './unidadmedida.component';
import { RouterModule, Routes } from '@angular/router';
/**
 * Created by pablo on 25/08/18.
 */

export const UnidadMedidaRoutes: Routes = [
    {
        path: '',
        component: UnidadMedidaComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
        ]
    }
];

export const UnidadMedidaRoutingModule = RouterModule.forChild(UnidadMedidaRoutes);
