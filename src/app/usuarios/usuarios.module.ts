import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatIconModule, MatInputModule, MatSelectModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { UsuarioService } from '../_services/usuario.service';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { SelectUsuarioComponent } from './select-usuario/select-usuario.component';
import { RubrosModule } from '../rubros/rubros.module';

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
    UsuariosRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    RubrosModule
  ],
  providers: [
    AlertService,
    LayoutService,
    UsuarioService
  ],
  declarations: [
    ListaUsuariosComponent,
    UsuariosComponent,
    AltaUsuarioComponent,
    SelectUsuarioComponent
  ],
  exports: [SelectUsuarioComponent],
  entryComponents: [AltaUsuarioComponent]
})
export class UsuariosModule { }
