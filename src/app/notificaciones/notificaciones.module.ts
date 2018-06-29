import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatDatepickerModule, MatDialogModule, MatIconModule, MatInputModule, MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ListaDestinatariosComponent } from './lista-destinatarios/lista-destinatarios.component';
import { NotificacionesService } from '../_services/notificaciones.service';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { NotificacionesComponent } from './notificaciones.component';
import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { AltaDestinatarioComponent } from './alta-destinatario/alta-destinatario.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    UsuariosModule,
    MatDatepickerModule,
    NotificacionesRoutingModule
  ],
  declarations: [
    ListaDestinatariosComponent,
    NotificacionesComponent,
    AltaDestinatarioComponent
  ],
  providers: [
    NotificacionesService,
    AlertService,
    LayoutService
  ]
})

export class NotificacionesModule { }
