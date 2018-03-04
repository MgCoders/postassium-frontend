import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AltaRegistroComponent } from './alta-registro/alta-registro.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import {
  MAT_DATE_LOCALE,
  MatButtonModule, MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { RegistrosRoutingModule } from './registros-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../_services/registro.service';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { TareaService } from '../_services/tarea.service';
import { RegistrosComponent } from './registros.component';
import { UsuariosModule } from '../usuarios/usuarios.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RegistrosRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    UsuariosModule,
    MatDatepickerModule
  ],
  declarations: [
    AltaRegistroComponent,
    ListaRegistrosComponent,
    RegistrosComponent
  ],
  providers: [
    RegistroService,
    AlertService,
    LayoutService,
    TareaService,
    DatePipe
  ],
  entryComponents: [
      AltaRegistroComponent
  ]
})

export class RegistrosModule { }
