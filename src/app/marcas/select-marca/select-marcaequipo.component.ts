import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { UsuarioService } from '../../_services/usuario.service';
import { Usuario } from '../../_models/Usuario';
import {MarcaEquipo} from '../../_models/MarcaEquipo';
import {MarcaEquipoService} from '../../_services/marca-equipo.services';

@Component({
  selector: 'app-select-marcas',
  templateUrl: './select-marcaequipo.component.html',
  styleUrls: ['./select-marcaequipo.component.scss']
})
export class SelectMarcaComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() desc: string;
  @Input() id: string;

  @Output() onChange: EventEmitter<MarcaEquipo> = new EventEmitter<MarcaEquipo>();

  public lista: MarcaEquipo[];

  constructor(
      private marcaEquipoService: MarcaEquipoService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
    this.lista = new Array();
    this.marcaEquipoService.getAll().subscribe(
        (data) => {
          this.lista = data;
        },
        (error) => {
          this.alertService.error(error, 5000);
        });
  }

  onChangeValue(evt) {
    const m: MarcaEquipo = this.lista.find((x) => x.id === evt.value);
    this.onChange.emit(m);
  }
}
