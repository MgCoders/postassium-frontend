import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import {Equipo} from '../../_models/Equipo';
import {EquipoService} from '../../_services/equipo.service';
import {AltaEquipoComponent} from '../alta-equipo/alta-equipo.component';
import {InformacionReciboComponent} from '../informacion-recibo/informacion-recibo.component';
import {DatePipe} from '@angular/common';

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
  public nombreEmpresa: string;
  public matricula: string;
  public equipo: Equipo;
  public equiposCliente: Equipo[];
  public loadCompleted: boolean;
  public equipoSelected: number;
  public fechaRecepcion: Date;
  public fechaPrevistaEntrega: Date;
  public horaActual: string;

  constructor(public dialog: MatDialog,
              private tareaService: TareaService,
              private trabajoService: TrabajoService,
              private clienteService: ClienteService,
              private equipoService: EquipoService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private router: Router,
              private layoutService: LayoutService) {
  }

  ngOnInit() {

    this.lista = new Array();
    this.trabajo = {} as Trabajo;
    this.cliente = {} as Cliente;
    this.rut = '';
    this.equipo = {} as Equipo;
    this.equiposCliente = new Array();
    this.loadCompleted = true;
    this.equipoSelected = 0;
    this.fechaRecepcion = new Date();
    this.horaActual = this.datePipe.transform(this.fechaRecepcion, 'HH:mm');

    this.trabajo.equipoDocumentos = false;
    this.trabajo.equipoRadio = false;
    this.trabajo.equipoExtintor = false;
    this.trabajo.equipoBalizas = false;
    this.trabajo.equipoLlaveRuedas = false;
    this.trabajo.equipoHerramientas = false;
    this.trabajo.equipoManuales = false;
    this.trabajo.equipoFrenteRadio = false;
    this.trabajo.equipoMangueraCabina = false;
    this.trabajo.equipoCenicero = false;
    this.trabajo.equipoGatoPalanca = false;
    this.trabajo.equipoParabrisasSano = false;
    this.trabajo.equipoVidriosLaterales = false;
    this.trabajo.equipoVidriosLateralesSanos = false;
    this.trabajo.equipoEspejos = false;
    this.trabajo.equipoEspejosSanos = false;
    this.trabajo.equipoSenalerosSanos = false;
    this.trabajo.equipoLucesTraserasSanas = false;
    this.trabajo.equipoRayones = false;
    this.trabajo.equipoAbollones = false;
    this.trabajo.equipoAuxiliar = false;
    this.trabajo.equipoAuxiliarArmada = false;

    console.log(this.cliente);
    this.layoutService.updatePreloaderState('active');
    this.layoutService.updatePreloaderState('hide');
  }

  monitorFacturacion() {
      this.router.navigate(['/app/trabajos/monitorfacturacion/']);
  }

  buscarRut() {
      console.log(this.rut);
      this.clienteService.getByRut(this.rut).subscribe(
          (data) => {
              this.cliente = data;
              console.log(data);
              this.loadDataEquipos();
              this.layoutService.updatePreloaderState('hide');

          },
          (error) => {
              this.layoutService.updatePreloaderState('hide');
              this.alertService.error(error, 5000);
          });

  }

  buscarNombre() {
        console.log(this.nombreEmpresa);
        this.clienteService.getByNombreEmpresa(this.nombreEmpresa).subscribe(
            (data) => {
                this.cliente = data;
                console.log(data);
                this.loadDataEquipos();
                this.layoutService.updatePreloaderState('hide');

            },
            (error) => {
                this.layoutService.updatePreloaderState('hide');
                this.alertService.error(error, 5000);
            });
    }

  buscarMatricula() {
        console.log(this.nombreEmpresa);
        this.equipoService.getByMarticula(this.matricula).subscribe(
            (data) => {
                this.equipo = data;
                console.log(data);
                this.layoutService.updatePreloaderState('hide');

            },
            (error) => {
                this.layoutService.updatePreloaderState('hide');
                this.alertService.error(error, 5000);
            });
    }

  informacionRecibo() {
        const dialog = this.dialog.open(InformacionReciboComponent, {
            data: [this.trabajo],
            width: '600px',
        });

        dialog.afterClosed().subscribe(
          (result) => {
              console.log(this.trabajo);
          });
    }

    loadDataEquipos() {
        if (this.cliente.id !== undefined) {
            this.equipoService.getByCliente(this.cliente.id).subscribe(
                (equipos) => {
                    this.equiposCliente = equipos;
                    console.log('Equipos');
                    console.log(equipos);
                    this.loadCompleted = true;
                });
        } else {
            this.equiposCliente = new Array();

        }
    }

    nuevoEquipo() {
        const dialog = this.dialog.open(AltaEquipoComponent, {
            data: [undefined, this.cliente, this.equiposCliente, this.cliente.id],
            width: '600px',
        });
        dialog.afterClosed().subscribe(
            (result) => {
                console.log(result);
                if (result === 1) {
                    this.loadDataEquipos();
                }
            });
    }

    editarEquipo(x: Equipo) {
        const dialog = this.dialog.open(AltaEquipoComponent, {
            data: [x, this.cliente, this.equiposCliente, this.cliente.id],
            width: '600px',
        });
        dialog.afterClosed().subscribe(
            (result) => {
                console.log(result);
                if (result === 1) {
                    this.loadDataEquipos();
                }
            });
    }

    seleccionarEquipo(x: Equipo) {
      if (x.id !== this.equipo.id) {
          this.equipo = x;
          this.equipoSelected = this.equipo.id;
      } else {
          this.equipo = {} as Equipo;
          this.equipoSelected = 0;
      }
    }

    nuevoCliente() {
        if (this.cliente.id === undefined) {
            console.log('AAAA');
            console.log(this.cliente);
            this.clienteService.create(this.cliente).subscribe(
                (data) => {
                    this.cliente = data;
                    this.alertService.success('Cliente agregado correctamente.', 3000);
                    console.log('CCC');
                    console.log(data);
                });
            console.log('BBBB');
            console.log(this.cliente);
        } else {
            this.cliente = {} as Cliente;
        }
        this.equipoSelected = 0;
        this.loadDataEquipos();
        this.nombreEmpresa = '';
        this.matricula = '';
    }

    guardar() {
      this.trabajo.cliente = this.cliente;
      this.trabajo.equipo = this.equipo;
      this.trabajo.estado = 'EN_PROCESO';
      this.trabajo.fechaRecepcion = this.datePipe.transform(this.fechaRecepcion, 'dd-MM-yyyy') + ' ' + this.horaActual;
      this.trabajo.fechaProvistaEntrega = this.datePipe.transform(this.fechaPrevistaEntrega, 'dd-MM-yyyy')
      console.log(this.trabajo);
      this.trabajoService.create(this.trabajo).subscribe(
          (data) => {
              this.alertService.success('Trabajo agregado correctamente.', 3000);
              this.ngOnInit();
      });
    }

    dateFromString(str: string): Date {
        const aux: string[] = str.split('-');
        return new Date(+aux[2], +aux[1] - 1, +aux[0]);
    }

}
