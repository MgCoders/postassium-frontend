import { TiposMaterialesComponent } from './tiposmateriales.component';
import { ListaTiposMaterialesComponent } from './lista-tiposmateriales/lista-tiposmateriales.component';
import { RouterModule, Routes } from '@angular/router';
/**
 * Created by pablo on 04/03/18.
 */

export const TiposMaterialesRoutes: Routes = [
    {
        path: '',
        component: TiposMaterialesComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaTiposMateriales', component: ListaTiposMaterialesComponent },
        ]
    }
];

export const TiposMaterialesRoutingModule = RouterModule.forChild(TiposMaterialesRoutes);
