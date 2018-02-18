import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { UsuarioService } from '../../_services/usuario.service';
import { Usuario } from '../../_models/Usuario';

@Component({
  selector: 'app-select-usuario',
  templateUrl: './select-usuario.component.html',
  styleUrls: ['./select-usuario.component.scss']
})
export class SelectUsuarioComponent implements OnInit {

  @Input() object: any;
  @Input() idModel: string;
  @Input() placeHolder: string;
  @Input() id: string;
  @Input() desc: string;

  @Output() onChange: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  public lista: Usuario[];

  constructor(
      private usuarioService: UsuarioService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
    this.lista = new Array();
    this.usuarioService.getAll().subscribe(
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
