import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AltaClienteComponent} from "./alta-cliente/alta-cliente.component";
import {ListaClientesComponent} from "./lista-clientes/lista-clientes.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from "@angular/material";
import {ClientesComponent} from "./clientes.component";
import {LayoutService} from "../layout/layout.service";
import {AlertService} from "../_services/alert.service";
import {AutocompleteClienteComponent} from "./autocomplete-cliente/autocomplete-cliente.component";
import {ClienteService} from "../_services/cliente.service";
import {ClientesRoutingModule} from "./clientes-routing.module";

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
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
      ClientesRoutingModule
  ],
  declarations: [
    AltaClienteComponent,
    ListaClientesComponent,
    ClientesComponent,
    AutocompleteClienteComponent
  ],
  exports: [
    AutocompleteClienteComponent
  ],
  providers: [
    AlertService,
    LayoutService,
    ClienteService
  ],
  entryComponents: [
      AltaClienteComponent
  ]
})

export class ClientesModule { }
