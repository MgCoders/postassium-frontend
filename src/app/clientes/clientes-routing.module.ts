import {ListaClientesComponent} from './lista-clientes/lista-clientes.component';
import {ClientesComponent} from './clientes.component';
import { RouterModule, Routes } from '@angular/router';
/**
 * Created by pablo on 04/03/18.
 */

export const ClientesRoutes: Routes = [
    {
        path: '',
        component: ClientesComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaClientes', component: ListaClientesComponent },
        ]
    }
];

export const ClientesRoutingModule = RouterModule.forChild(ClientesRoutes);
