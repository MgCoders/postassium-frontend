import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { Tarea } from '../../_models/Tarea';

@Component({
  selector: 'app-select-tarea',
  templateUrl: './select-tarea.component.html',
  styleUrls: ['./select-tarea.component.scss']
})

export class SelectTareaComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;

  @Output() onChange: EventEmitter<Tarea> = new EventEmitter<Tarea>();

  public lista: Tarea[];

  constructor(private service: TareaService,
              private as: AlertService) { }

  ngOnInit() {
    this.lista = new Array();
    this.service.getAll().subscribe(
      (data) => {
        this.lista = data;
      },
      (error) => {
        this.as.error(error, 5000);
      });
  }

  onChangeValue(evt) {
    this.onChange.emit(this.lista.find((x) => x.id === evt.value));
  }
}
