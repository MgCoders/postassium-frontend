import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMarcasComponent } from './lista-marcas/lista-marcas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule,
  MatDialogModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
import { UsuarioService } from '../_services/usuario.service';
import {MarcasRoutingModule} from './marcas-routing.module';
import { MarcasComponent } from './marcas.component';
import { AltaMarcaComponent } from './alta-marca/alta-marca.component';
import { SelectMarcaComponent } from './select-marca/select-marcaequipo.component';
import { RubrosModule } from '../rubros/rubros.module';
import {MarcaEquipoService} from "../_services/marca-equipo.services";
import {AutocompleteMarcaComponent} from "./autocomplete-marcas/autocomplete-marca.component";

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
    MarcasRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    RubrosModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    AlertService,
    LayoutService,
    MarcaEquipoService
  ],
  declarations: [
    ListaMarcasComponent,
    MarcasComponent,
    AltaMarcaComponent,
    SelectMarcaComponent,
    AutocompleteMarcaComponent
  ],
  exports: [SelectMarcaComponent, AutocompleteMarcaComponent],
  entryComponents: [AltaMarcaComponent]
})
export class MarcasModule { }
