import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PuntoControl } from '../../_models/PuntoControl';
import { PuntoControlService } from '../../_services/punto-control.services';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-select-puntocontrol',
  templateUrl: './select-puntocontrol.component.html',
  styleUrls: ['./select-puntocontrol.component.scss']
})
export class SelectPuntoControlComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;
  @Input() trabajoId: number;

  @Output() onChange: EventEmitter<PuntoControl> = new EventEmitter<PuntoControl>();

  public lista: PuntoControl[];

  constructor(
      private puntoControlService: PuntoControlService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
    this.puntoControlService.getByTrabajo(this.trabajoId).subscribe(
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
