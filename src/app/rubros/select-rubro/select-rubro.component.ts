import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rubro } from '../../_models/Rubro';
import { RubroService } from '../../_services/rubro.service';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-select-rubro',
  templateUrl: './select-rubro.component.html',
  styleUrls: ['./select-rubro.component.scss']
})

export class SelectRubroComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;

  @Output() onChange: EventEmitter<Rubro> = new EventEmitter<Rubro>();

  public lista: Rubro[];

  constructor(private service: RubroService,
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
