import { TiposEquiposComponent } from './tiposequipos.component';
import { ListaTiposEquiposComponent } from './lista-tiposequipos/lista-tiposequipos.component';
import { RouterModule, Routes } from '@angular/router';
/**
 * Created by pablo on 04/03/18.
 */

export const TiposEquiposRoutes: Routes = [
    {
        path: '',
        component: TiposEquiposComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaTiposEquipos', component: ListaTiposEquiposComponent },
        ]
    }
];

export const TiposEquiposRoutingModule = RouterModule.forChild(TiposEquiposRoutes);
