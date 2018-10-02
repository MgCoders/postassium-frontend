import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoMaterialService } from '../../_services/tipomaterial.service';
import { debounceTime, finalize, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-autocomplete-tipomaterial',
  templateUrl: './autocomplete-tipomaterial.component.html',
  styleUrls: ['./autocomplete-tipomaterial.component.scss']
})
export class AutocompleteTipomaterialComponent implements OnInit {


  filteredMateriales: TipoMaterial[] = [];
  materialForm: FormGroup;
  isLoading = false;

  @Input() object: any;
  @Input() elementoActual: string;

  @Output() ValueOnChange: EventEmitter<TipoMaterial> = new EventEmitter<TipoMaterial>();

  constructor(private fb: FormBuilder,
              private tipoMaterialService: TipoMaterialService) { }

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
            switchMap((value) => (value === '' ? Observable.of([]) : this.tipoMaterialService.getAll_x_Filtro(value))
                .pipe(
                    finalize(() => this.isLoading = false),
                )
            )
        )
        .subscribe((tiposMateriales) => this.filteredMateriales = tiposMateriales);
  }

  displayFn(material: TipoMaterial) {
    if (material) { return material.familia + ' - ' + material.grupo  + ' - ' + material.subgrupo; }
  }

  onOptionSelected(x: TipoMaterial) {
    this.ValueOnChange.emit(x);
  }

  getDesc() {
    return this.object === undefined ? '' :
        (this.object.familia + ' - '
        + this.object.grupo + ' - '
        + this.object.subgrupo);
  }
}
