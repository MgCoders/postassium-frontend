import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { TipoMaterialService } from '../_services/tipomaterial.service';
import { AltaTipoEquipoComponent } from './alta-tipoequipo/alta-tipoequipo.component';
import { ListaTiposEquiposComponent } from './lista-tiposequipos/lista-tiposequipos.component';
import { SelectTipoEquipoComponent } from './select-tipoequipo/select-tipoequipo.component';
import { TiposEquiposComponent } from './tiposequipos.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiposEquiposRoutingModule } from './tiposequipos-routing.module';
import {TipoEquipoService} from "../_services/tipoequipo.service";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    TiposEquiposRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AltaTipoEquipoComponent,
    ListaTiposEquiposComponent,
    SelectTipoEquipoComponent,
    TiposEquiposComponent
  ],
  providers: [
    AlertService,
    LayoutService,
    TipoEquipoService
  ],
  exports: [
    SelectTipoEquipoComponent
  ],
  entryComponents: [
    AltaTipoEquipoComponent
  ]
})
export class TiposEquiposModule { }