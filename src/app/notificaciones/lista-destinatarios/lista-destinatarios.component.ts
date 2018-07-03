import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../../_services/notificaciones.service';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { MatDialog } from '@angular/material';
import { NotificacionDestinatario } from '../../_models/NotificacionDestinatario';
import { Usuario } from '../../_models/Usuario';

@Component({
  selector: 'app-lista-destinatarios',
  templateUrl: './lista-destinatarios.component.html',
  styleUrls: ['./lista-destinatarios.component.scss']
})
export class ListaDestinatariosComponent implements OnInit {

  public destinatarios: NotificacionDestinatario[];

  constructor(public dialog: MatDialog,
              private notificacionesService: NotificacionesService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    let d1 = {} as NotificacionDestinatario;
    d1.id = 1;
    d1.tipo = NotificacionDestinatario.TipoEnum.FACTURAERP;
    let u1 = {} as Usuario;
    u1.nombre = 'José';
    u1.email = 'jose@sandonato.com.uy';
    d1.usuario = u1;

    let d2 = {} as NotificacionDestinatario;
    d2.id = 2;
    d2.tipo = NotificacionDestinatario.TipoEnum.CARGARVALORES;
    d2.usuario = u1;
    this.destinatarios = new Array();
    this.destinatarios.push(d1);
    this.destinatarios.push(d2);
  }

  nuevo() {

  }

  editar(d: NotificacionDestinatario) {

  }

  eliminar(d: NotificacionDestinatario) {

  }
}
