
import { UsuariosComponent } from './usuarios.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

export const UsuariosRoutes: Routes = [
    {
        path: '',
        component: UsuariosComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaUsuarios', component: ListaUsuariosComponent },
        ]
    }
];

export const UsuariosRoutingModule = RouterModule.forChild(UsuariosRoutes);
