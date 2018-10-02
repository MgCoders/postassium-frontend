import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Material } from '../../_models/models';
import { MaterialService } from '../../_services/material.service';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-autocomplete-material',
  templateUrl: './autocomplete-material.component.html',
  styleUrls: ['./autocomplete-material.component.scss']
})
export class AutocompleteMaterialComponent implements OnInit {

  public filteredMateriales: Material[] = [];
  public materialForm: FormGroup;
  public isLoading = false;

  @Input() object: any;
  @Input() elementoActual: string;
  @Input() atributoId: any;
  @Input() addEmptyItem: boolean;

  @Input() pHolder: string;

  @Output() ValueOnChange: EventEmitter<Material> = new EventEmitter<Material>();

  constructor(private fb: FormBuilder, private ms: MaterialService) {
  }

  ngOnInit() {
    this.materialForm = this.fb.group({
      materialInput: null
    });

    this.materialForm
      .get('materialInput')
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
      .subscribe((materiales) => this.filteredMateriales = materiales);
  }

  displayFn(material: Material) {
    if (material) { return material.nombre; }
  }

  onOptionSelected(x: Material) {
    this.ValueOnChange.emit(x);
  }

  getDesc() {
    return this.object[this.elementoActual] === undefined ? '' :
          (this.object[this.elementoActual].id + ' - ' + this.object[this.elementoActual].nombre);
  }
}
