import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Material } from '../../_models/models';
import { MaterialService } from '../../_services/material.service';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete-material',
  templateUrl: './autocomplete-material.component.html',
  styleUrls: ['./autocomplete-material.component.scss']
})
export class AutocompleteMaterialComponent implements OnInit {

/*   public filterCtrl: FormControl;
  public filtroActual: string;
  public elementosFiltrados: Material[];
  public lista: Material[];
  public loading: number = 0; */

  filteredMateriales: Material[] = [];
  materialForm: FormGroup;
  isLoading = false;

  @Input() object: any;
  @Input() elementoActual: string;
  @Input() atributoId: any;
  @Input() addEmptyItem: boolean;

  @Input() pHolder: string;

  @Output() ValueOnChange: EventEmitter<Material> = new EventEmitter<Material>();

  constructor(private fb: FormBuilder, private ms: MaterialService) {
    // this.filterCtrl = new FormControl();
  }

/*   ngOnInit() {
    this.filtroActual = '';
  }

  getData() {
    this.loading++;
    this.ms.getAll_x_Filtro(this.filtroActual)
      .subscribe(
      (data) => {
        this.loading--;
        this.lista = new Array();
        if (this.addEmptyItem) {
          const m = {} as Material;
          m.id = undefined;
          m.nombre = 'Sin Material';
          this.lista.push(m);
        }
        this.lista = this.lista.concat(data);

        this.elementosFiltrados = this.filterCtrl.valueChanges
          //.startWith(null)
          .map((filtros) => filtros ? this.filterItem(filtros) : this.lista.slice());
      },
      (error) => {
        this.loading--;
      });
  }

  filterItem(filtros) {
    return this.lista;
  }

  getDescripcion(m: Material): string {
    if (m !== undefined) {
      const desc: string = m.id === undefined ? m.nombre : m.id + ' - ' + m.nombre;

      return desc;
    } else {
      return '';
    }
  }

  onOptionSelected(x: Material) {
    this.ValueOnChange.emit(x);
  }
 */

/*   ngOnInit() {

      this.filterCtrl
      .valueChanges
      .pipe(
        debounceTime(300),
        tap(() => this.loading++),
        switchMap((value) => this.ms.getAll_x_Filtro(value)
        .pipe(
          finalize(() => this.loading--),
          )
        )
      )
      .subscribe((materiales) => {
        this.elementosFiltrados = materiales;
      });
  }

  displayFn(mat: Material) {
    if (mat) { return mat.nombre; }
  } */

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
