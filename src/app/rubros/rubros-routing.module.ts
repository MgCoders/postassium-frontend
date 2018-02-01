import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../_guards/admin.guard';
import { RubrosComponent } from './rubros.component';
import { ListaRubrosComponent } from './lista-rubros/lista-rubros.component';
/**
 * Created by pablo on 01/02/18.
 */

export const RubrosRoutes: Routes = [
    {
        path: '',
        component: RubrosComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'lista', component: ListaRubrosComponent }
        ]
    }
];

export const RubrosRoutingModule = RouterModule.forChild(RubrosRoutes);
