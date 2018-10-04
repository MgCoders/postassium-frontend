import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Material } from '../../_models/models';
import { MaterialService } from '../../_services/material.service';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { Cliente } from '../../_models/Cliente';
import { ClienteService } from '../../_services/cliente.service';
import 'rxjs/add/observable/of';
import {MarcaEquipo} from "../../_models/MarcaEquipo";
import {MarcaEquipoService} from "../../_services/marca-equipo.services";

@Component({
  selector: 'app-autocomplete-marca',
  templateUrl: './autocomplete-marca.component.html',
  styleUrls: ['./autocomplete-marca.component.scss']
})
export class AutocompleteMarcaComponent implements OnInit {

  public filteredMarcas: Cliente[] = [];
  public marcaForm: FormGroup;
  public isLoading = false;

  @Input() object: any;
  @Input() elementoActual: string;
  @Input() atributoId: any;
  @Input() addEmptyItem: boolean;

  @Input() pHolder: string;

  @Output() ValueOnChange: EventEmitter<MarcaEquipo> = new EventEmitter<MarcaEquipo>();

  constructor(private fb: FormBuilder, private ms: MarcaEquipoService) {
    // this.filterCtrl = new FormControl();
  }

  ngOnInit() {
    this.marcaForm = this.fb.group({
      marcaInput: null
    });

    this.marcaForm
      .get('marcaInput')
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.isLoading = true),
        switchMap((value) => (value === '' ? Observable.of([]) : this.ms.getAll_x_Filtro(value))
        .pipe(
          finalize(() => this.isLoading = false),
          )
        )
      )
      .subscribe((marcas) => this.filteredMarcas = marcas);
  }

  displayFn(marca: MarcaEquipo) {
    if (marca) { return marca.nombre; }
  }

  onOptionSelected(x: MarcaEquipo) {
    this.ValueOnChange.emit(x);
  }

  getDesc() {
    return this.object[this.elementoActual] === undefined ? '' :
          (this.object[this.elementoActual].nombre);
  }
}
