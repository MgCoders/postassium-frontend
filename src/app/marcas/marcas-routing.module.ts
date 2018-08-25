
import {MarcasComponent} from './marcas.component';
import { RouterModule, Routes } from '@angular/router';
import {ListaMarcasComponent} from './lista-marcas/lista-marcas.component';

export const MarcasRoutes: Routes = [
    {
        path: '',
        component: MarcasComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaMarcas', component: ListaMarcasComponent },
        ]
    }
];

export const MarcasRoutingModule = RouterModule.forChild(MarcasRoutes);
