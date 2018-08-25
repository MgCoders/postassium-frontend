import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnidadMedida } from '../../_models/UnidadMedida';
import { UnidadMedidaService } from '../../_services/unidadmedida.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-select-unidadmedida',
  templateUrl: './select-unidadmedida.component.html',
  styleUrls: ['./select-unidadmedida.component.scss']
})
export class SelectUnidadMedidaComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;

  @Output() onChange: EventEmitter<UnidadMedida> = new EventEmitter<UnidadMedida>();

  lista: UnidadMedida[];

  constructor(
      private unidadMedidaService: UnidadMedidaService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
    this.lista = new Array();
    this.unidadMedidaService.getAll().subscribe(
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
