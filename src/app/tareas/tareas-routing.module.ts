import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { AltaTareaComponent } from './alta-tarea/alta-tarea.component';
import { TareasComponent } from './tareas.component';
import { ListaTareaMaterialesComponent } from './lista-tareamateriales/lista-tareamateriales.component';
import { AltaTareaMaterialComponent } from './alta-tareamaterial/alta-tareamaterial.component';

export const TareasRoutes: Routes = [
  {
    path: '',
    component: TareasComponent,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'listaTareas', component: ListaTareasComponent },
      /* { path: 'alta', component: AltaTareaComponent }, */
      { path: 'listaTareaMateriales/:id', component: ListaTareaMaterialesComponent },
      { path: 'altaTareaMaterial', component: AltaTareaMaterialComponent },
    ]
  }
];

export const TareasRoutingModule = RouterModule.forChild(TareasRoutes);
