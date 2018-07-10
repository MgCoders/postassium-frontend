import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forma-pago-factura-select',
  templateUrl: './forma-pago-factura-select.component.html',
  styleUrls: ['./forma-pago-factura-select.component.scss']
})
export class FormaPagoFacturaSelectComponent implements OnInit {

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
    const contado: {id: string, desc: string} = {id: 'Contado', desc: 'Contado'};
    const credito: {id: string, desc: string} = {id: 'Credito', desc: 'Crédito'};
    this.lista.push(contado);
    this.lista.push(credito);
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
