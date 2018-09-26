import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaMaterialComponent } from './alta-material/alta-material.component';
import { ListaMaterialesComponent } from './lista-materiales/lista-materiales.component';
import { SelectMaterialComponent } from './select-material/select-material.component';
import { TiposMaterialesModule } from '../tiposmateriales/tiposmateriales.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialesRoutingModule } from './materiales-routing.module';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule, MatTableModule, MatPaginatorModule
} from '@angular/material';
import { MaterialesComponent } from './materiales.component';
import { MaterialService } from '../_services/material.service';
import { LayoutService } from '../layout/layout.service';
import { AlertService } from '../_services/alert.service';
import { UnidadMedidaModule } from '../unidadmedida/unidadmedida.module';
import { NucleoMaterialService } from '../_services/nucleomaterial.service';
import { AutocompleteMaterialComponent } from './autocomplete-material/autocomplete-material.component';
import { ListaMaterialesLazyComponent } from './lista-materiales-lazy/lista-materiales-lazy.component';

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
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    AltaMaterialComponent,
    ListaMaterialesComponent,
    SelectMaterialComponent,
    MaterialesComponent,
    AutocompleteMaterialComponent,
    ListaMaterialesLazyComponent
  ],
  exports: [
    SelectMaterialComponent,
    AutocompleteMaterialComponent
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
