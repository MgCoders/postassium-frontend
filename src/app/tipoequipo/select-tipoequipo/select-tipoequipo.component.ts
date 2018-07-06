import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoMaterialService } from '../../_services/tipomaterial.service';
import { TipoMaterial } from '../../_models/TipoMaterial';
import { AlertService } from '../../_services/alert.service';
import {TipoEquipo} from "../../_models/TipoEquipo";
import {TipoEquipoService} from "../../_services/tipoequipo.service";

@Component({
  selector: 'app-select-tipoequipo',
  templateUrl: './select-tipoequipo.component.html',
  styleUrls: ['./select-tipoequipo.component.scss']
})
export class SelectTipoEquipoComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;

  @Output() onChange: EventEmitter<TipoEquipo> = new EventEmitter<TipoEquipo>();

  lista: TipoEquipo[];

  constructor(
      private tipoEquipoService: TipoEquipoService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
    this.lista = new Array();
    this.tipoEquipoService.getAll().subscribe(
        (data) => {
          console.log(data);
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
