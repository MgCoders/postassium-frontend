
import { RouterModule, Routes } from '@angular/router';
import {
    ListaPuntosControlComponent
} from './lista-puntoscontrol/lista-puntoscontrol.component';
import { PuntosControlComponent } from './puntoscontrol.component';
import { AltaPuntocontrolComponent } from './alta-puntocontrol/alta-puntocontrol.component';

export const PuntosControlRoutes: Routes = [
    {
        path: '',
        component: PuntosControlComponent,
        children: [
            { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
            { path: 'listaPuntosControl', component: ListaPuntosControlComponent },
        ]
    }
]

export const PuntosControlRoutingModule = RouterModule.forChild(PuntosControlRoutes);
