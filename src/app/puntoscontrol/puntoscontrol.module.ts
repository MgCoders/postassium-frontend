import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPuntosControlComponent } from './lista-puntoscontrol/lista-puntoscontrol.component';
import { PuntoControlService } from '../_services/punto-control.services';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { PuntosControlRoutingModule } from './puntoscontrol-routing.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PuntosControlComponent } from './puntoscontrol.component';
import { AltaPuntocontrolComponent } from './alta-puntocontrol/alta-puntocontrol.component';
import { UsuariosModule } from '../usuarios/usuarios.module';

@NgModule({
  imports: [
    CommonModule,
    PuntosControlRoutingModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    UsuariosModule
  ],
  providers: [PuntoControlService, AlertService, LayoutService],
  declarations: [ListaPuntosControlComponent, PuntosControlComponent, AltaPuntocontrolComponent],
  entryComponents: [AltaPuntocontrolComponent]
})

export class PuntosControlModule { }
