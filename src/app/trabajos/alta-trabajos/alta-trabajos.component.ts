import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TareaService } from '../../_services/tarea.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { Tarea } from '../../_models/Tarea';
import { Trabajo } from '../../_models/Trabajo';
import { AltaPuntocontrolComponent } from '../../puntoscontrol/alta-puntocontrol/alta-puntocontrol.component';
import { PuntoControl } from '../../_models/PuntoControl';
import { TrabajoService } from '../../_services/trabajo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Cliente } from '../../_models/Cliente';
import { ClienteService } from '../../_services/cliente.service';


@Component({
  selector: 'app-alta-trabajos',
  templateUrl: './alta-trabajos.component.html',
  styleUrls: ['./alta-trabajos.component.scss']
})
export class AltaTrabajosComponent implements OnInit {

  public lista: Tarea[];
  public trabajo: Trabajo;
  public cliente: Cliente;
  public rut: string;

  constructor(public dialog: MatDialog,
              private tareaService: TareaService,
              private trabajoService: TrabajoService,
              private clienteService: ClienteService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router,
              private layoutService: LayoutService) {
  }

  ngOnInit() {

    this.lista = new Array();
    this.trabajo = {} as Trabajo;
    this.cliente = {} as Cliente;
    this.rut = '';

    this.layoutService.updatePreloaderState('active');
    this.layoutService.updatePreloaderState('hide');
  }

  monitorFacturacion() {
      this.router.navigate(['/app/trabajos/monitorfacturacion/']);
  }

  buscar() {
      console.log(this.rut);
      this.clienteService.getByRut(this.rut).subscribe(
          (data) => {
              this.cliente = data;
              console.log(data);
              this.layoutService.updatePreloaderState('hide');

          },
          (error) => {
              this.layoutService.updatePreloaderState('hide');
              this.alertService.error(error, 5000);
          });
  }

  editar(x: Tarea) {
  }

  nuevoPuntoContol() {
  }

}
