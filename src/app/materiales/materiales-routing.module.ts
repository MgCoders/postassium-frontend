import { ListaMaterialesComponent } from './lista-materiales/lista-materiales.component';
import { MaterialesComponent } from './materiales.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaMaterialesLazyComponent } from './lista-materiales-lazy/lista-materiales-lazy.component';
/**
 * Created by pablo on 04/03/18.
 */

export const MaterialesRoutes: Routes = [
    {
        path: '',
        component: MaterialesComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaMateriales', component: ListaMaterialesComponent },
            { path: 'listaMaterialesLazy', component: ListaMaterialesLazyComponent },
        ]
    }
];

export const MaterialesRoutingModule = RouterModule.forChild(MaterialesRoutes);
