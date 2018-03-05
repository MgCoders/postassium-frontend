import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoMaterialService } from '../../_services/tipomaterial.service';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-select-tipomaterial',
  templateUrl: './select-tipomaterial.component.html',
  styleUrls: ['./select-tipomaterial.component.scss']
})
export class SelectTipoMaterialComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;

  @Output() onChange: EventEmitter<TipoMaterial> = new EventEmitter<TipoMaterial>();

  lista: TipoMaterial[];

  constructor(
      private tipoMaterialService: TipoMaterialService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
    this.lista = new Array();
    this.tipoMaterialService.getAll().subscribe(
        (data) => {
          this.lista = data;
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
  }

  onChangeValue(evt) {
    this.onChange.emit(this.lista.find((x) => x.id === evt.value));
  }
}
