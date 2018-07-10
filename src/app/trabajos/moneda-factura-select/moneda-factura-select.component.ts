import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moneda-factura-select',
  templateUrl: './moneda-factura-select.component.html',
  styleUrls: ['./moneda-factura-select.component.scss']
})
export class MonedaFacturaSelectComponent implements OnInit {

  @Input() object: any;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;
  @Input() addEmptyOption: boolean;
  @Input() required: boolean;

  @Output() onChange: EventEmitter<{id: string, desc: string}> = new EventEmitter<{id: string, desc: string}>();

  public lista: Array<{id: string, desc: string}>;
  public fc: FormControl = new FormControl();

  constructor() {
    this.lista = new Array();
    const pesos: {id: string, desc: string} = {id: '$', desc: 'Pesos'};
    const dolares: {id: string, desc: string} = {id: 'USD', desc: 'Dólares'};
    this.lista.push(pesos);
    this.lista.push(dolares);
   }

  ngOnInit() {
    if (this.required) {
      this.fc.setValidators([Validators.required]);
    }
  }

  onChangeValue(evt) {
    this.onChange.emit(this.lista.find((x) => x.id === evt.value));
  }
}
