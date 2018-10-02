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
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule, MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiposMaterialesRoutingModule } from './tiposmateriales-routing.module';
import { AutocompleteTipomaterialComponent } from './autocomplete-tipomaterial/autocomplete-tipomaterial.component';

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
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AltaTipoMaterialComponent,
    ListaTiposMaterialesComponent,
    SelectTipoMaterialComponent,
    TiposMaterialesComponent,
    AutocompleteTipomaterialComponent
  ],
  providers: [
    AlertService,
    LayoutService,
    TipoMaterialService
  ],
  exports: [
    SelectTipoMaterialComponent,
    AutocompleteTipomaterialComponent
  ],
  entryComponents: [
      AltaTipoMaterialComponent
  ]
})
export class TiposMaterialesModule { }
