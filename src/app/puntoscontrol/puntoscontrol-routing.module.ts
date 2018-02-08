
import { RouterModule, Routes } from '@angular/router';
import {
    ListaPuntosControlComponent
} from './lista-puntoscontrol/lista-puntoscontrol.component';
import { PuntosControlComponent } from './puntoscontrol.component';

export const PuntosControlRoutes: Routes = [
    {
        path: '',
        component: PuntosControlComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'lista', component: ListaPuntosControlComponent }
        ]
    }
]

export const PuntosControlRoutingModule = RouterModule.forChild(PuntosControlRoutes);
