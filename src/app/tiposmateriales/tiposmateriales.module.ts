import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { TipoMaterialService } from '../_services/tipomaterial.service';
import { AltaTipoMaterialComponent } from './alta-tipomaterial/alta-tipomaterial.component';
import { ListaTiposMaterialesComponent } from './lista-tiposmateriales/lista-tiposmateriales.component';
import { SelectTipoMaterialComponent } from './select-tipomaterial/select-tipomaterial.component';
import { TiposMaterialesComponent } from './tiposmateriales.component';
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
import { TiposMaterialesRoutingModule } from './tiposmateriales-routing.module';

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
    TiposMaterialesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AltaTipoMaterialComponent,
    ListaTiposMaterialesComponent,
    SelectTipoMaterialComponent,
    TiposMaterialesComponent
  ],
  providers: [
    AlertService,
    LayoutService,
    TipoMaterialService
  ],
  exports: [
      SelectTipoMaterialComponent
  ],
  entryComponents: [
      AltaTipoMaterialComponent
  ]
})
export class TiposMaterialesModule { }
