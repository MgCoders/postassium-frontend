import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialService } from '../../_services/material.service';
import { AlertService } from '../../_services/alert.service';
import { Material } from '../../_models/Material';

@Component({
  selector: 'app-select-material',
  templateUrl: './select-material.component.html',
  styleUrls: ['./select-material.component.scss']
})
export class SelectMaterialComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;

  @Output() onChange: EventEmitter<Material> = new EventEmitter<Material>();

  public lista: Material[];

  constructor(
      private service: MaterialService,
      private as: AlertService
  ) { }

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
