import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../_guards/admin.guard';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import { AltaRegistroComponent } from './alta-registro/alta-registro.component';
import { RegistrosComponent } from './registros.component';
/**
 * Created by pablo on 03/03/18.
 */

export const RegistrosRoutes: Routes = [
    {
        path: '',
        component: RegistrosComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaRegistros/:id', component: ListaRegistrosComponent },
            { path: 'altaRegistro', component: AltaRegistroComponent }
        ]
    }
];

export const RegistrosRoutingModule = RouterModule.forChild(RegistrosRoutes);
