import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Material } from '../../_models/models';
import { MaterialService } from '../../_services/material.service';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import {Cliente} from "../../_models/Cliente";
import {ClienteService} from "../../_services/cliente.service";

@Component({
  selector: 'app-autocomplete-cliente',
  templateUrl: './autocomplete-cliente.component.html',
  styleUrls: ['./autocomplete-cliente.component.scss']
})
export class AutocompleteClienteComponent implements OnInit {

/*   public filterCtrl: FormControl;
  public filtroActual: string;
  public elementosFiltrados: Material[];
  public lista: Material[];
  public loading: number = 0; */

  filteredClientes: Cliente[] = [];
  clienteForm: FormGroup;
  isLoading = false;

  @Input() object: any;
  @Input() elementoActual: string;
  @Input() atributoId: any;
  @Input() addEmptyItem: boolean;

  @Input() pHolder: string;

  @Output() ValueOnChange: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  constructor(private fb: FormBuilder, private cs: ClienteService) {
    // this.filterCtrl = new FormControl();
  }


  ngOnInit() {
    this.clienteForm = this.fb.group({
      clienteInput: null
    });

    this.clienteForm
      .get('clienteInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap((value) => (value === '' ? Observable.of([]) : this.cs.getAll_x_Filtro(value))
        .pipe(
          finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe((clientes) => this.filteredClientes = clientes);
  }

  displayFn(cliente: Cliente) {
    if (cliente) { return cliente.rut + ' - ' + cliente.nombreEmpresa; }
  }

  onOptionSelected(x: Cliente) {
    this.ValueOnChange.emit(x);
  }

  getDesc() {
    return this.object[this.elementoActual] === undefined ? '' :
          (this.object[this.elementoActual].rut + ' - ' + this.object[this.elementoActual].nombreEmpresa);
  }
}
