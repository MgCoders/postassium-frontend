import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaMaterialComponent } from './alta-material/alta-material.component';
import { ListaMaterialesComponent } from './lista-materiales/lista-materiales.component';
import { SelectMaterialComponent } from './select-material/select-material.component';
import { TiposMaterialesModule } from '../tiposmateriales/tiposmateriales.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialesRoutingModule } from './materiales-routing.module';
import {
  MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatIconModule, MatInputModule, MatSelectModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { MaterialesComponent } from './materiales.component';
import { MaterialService } from '../_services/material.service';
import { LayoutService } from '../layout/layout.service';
import { AlertService } from '../_services/alert.service';
import { UnidadMedidaModule } from '../unidadmedida/unidadmedida.module';
import { NucleoMaterialService } from '../_services/nucleomaterial.service';

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
    MaterialesRoutingModule,
    ReactiveFormsModule,
    TiposMaterialesModule,
    ReactiveFormsModule,
    UnidadMedidaModule,
    MatCheckboxModule
  ],
  declarations: [
    AltaMaterialComponent,
    ListaMaterialesComponent,
    SelectMaterialComponent,
    MaterialesComponent
  ],
  exports: [
    SelectMaterialComponent
  ],
  providers: [
    AlertService,
    LayoutService,
    MaterialService,
    NucleoMaterialService
  ],
  entryComponents: [
      AltaMaterialComponent
  ]
})

export class MaterialesModule { }
