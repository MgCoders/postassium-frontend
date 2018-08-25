import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUnidadMedidaComponent } from './select-unidadmedida/select-unidadmedida.component';
import { UnidadMedidaRoutingModule } from './unidadmedida-routing.module';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule, MatIconModule, MatInputModule, MatSelectModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { UnidadMedidaComponent } from './unidadmedida.component';
import { UnidadMedidaService } from '../_services/unidadmedida.service';
import { LayoutService } from '../layout/layout.service';
import { AlertService } from '../_services/alert.service';


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
    UnidadMedidaRoutingModule
  ],
  providers: [
    AlertService,
    LayoutService,
    UnidadMedidaService
  ],
  exports: [
    SelectUnidadMedidaComponent
  ],
  declarations: [
    SelectUnidadMedidaComponent,
    UnidadMedidaComponent
  ]
})

export class UnidadMedidaModule { }
