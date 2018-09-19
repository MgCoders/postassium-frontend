import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './calendario.component';
import { AdminGuard } from '../_guards/admin.guard';
import { GanttComponent } from "./gantt/gantt.component";
import {CalendarioCalendarioComponent} from "./calendario/calendario-calendario.component";

export const CalendarioRoutes: Routes = [
  {
    path: '',
    component: CalendarioComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'calendario', component: CalendarioCalendarioComponent },
      { path: 'gantt', component: GanttComponent },
    ]
  }
];

export const CalendarioRoutingModule = RouterModule.forChild(CalendarioRoutes);
