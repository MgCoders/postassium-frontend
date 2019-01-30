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
import { Equipo } from '../../_models/Equipo';
import { EquipoService } from '../../_services/equipo.service';
import { AltaEquipoComponent } from '../alta-equipo/alta-equipo.component';
import { InformacionReciboComponent } from '../informacion-recibo/informacion-recibo.component';
import { DatePipe } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-trabajos',
  templateUrl: './recuperar-trabajos.component.html',
  styleUrls: ['./recuperar-trabajos.component.scss']
})
export class RecuperarTrabajosComponent implements OnInit {

    public idTrabajo: number;
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

  public conEquipo: boolean;

  public completed: boolean;

  public visitaFC = new FormControl('', [Validators.required]);
  public entregaFC = new FormControl('', [Validators.required]);
  public nroOrdenFC = new FormControl('', [Validators.required]);
  public cotizacionFC = new FormControl('', [Validators.required]);

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

      this.route.params.subscribe((params) => {
          this.idTrabajo = +params['id'];
      });
      this.layoutService.updatePreloaderState('active');
      // TODO pasar por parámetro el id del trabajo

      this.trabajoService.get(this.idTrabajo).subscribe(
          (data) => {
              this.trabajo = data;
              this.cliente = this.trabajo.cliente;
              this.fechaPrevistaEntrega = this.dateFromString(this.trabajo.fechaProvistaEntrega);
              this.loadDataEquipos();
              if (this.trabajo.equipo !== undefined) {
                  this.equipo = this.trabajo.equipo;
                  this.equipoSelected = 1;
                  this.conEquipo = true;
              } else {
                  this.equipo = {} as Equipo;
                  this.equipoSelected = 0;
                  this.conEquipo = false;
              }
              console.log(data);
              this.layoutService.updatePreloaderState('hide');

          },
          (error) => {
              this.layoutService.updatePreloaderState('hide');
              this.alertService.error(error, 5000);
          });

      this.lista = new Array();

      this.rut = '';
      this.loadCompleted = true;
      this.fechaRecepcion = new Date();//this.dateFromString(this.trabajo.fechaRecepcion);
      this.horaActual = this.datePipe.transform(this.fechaRecepcion, 'HH:mm');
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

    clienteOnChange(c: Cliente) {
        this.cliente = c;
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
      if (this.conEquipo) {
          this.trabajo.equipo = this.equipo;
      }
      this.trabajo.estado = 'EN_PROCESO';
      this.trabajo.fechaRecepcion = this.datePipe.transform(this.fechaRecepcion, 'dd-MM-yyyy') + ' ' + this.horaActual;
      this.trabajo.fechaProvistaEntrega = this.datePipe.transform(this.fechaPrevistaEntrega, 'dd-MM-yyyy');
      this.trabajo.paraFinalizar = false;
      console.log(this.trabajo);
      this.trabajoService.edit(this.trabajo).subscribe(
          (data) => {
              this.alertService.success('Trabajo agregado correctamente.', 3000);
              this.completed = true;
              this.router.navigate(['/app/trabajos/monitorfacturacion/progreso']);
      });


    }

    crear() {
        this.trabajo.cliente = this.cliente;
        if (this.conEquipo) {
            this.trabajo.equipo = this.equipo;
        }
        this.trabajo.estado = 'CREADO';
        this.trabajo.fechaRecepcion = this.datePipe.transform(this.fechaRecepcion, 'dd-MM-yyyy') + ' ' + this.horaActual;
        this.trabajo.fechaProvistaEntrega = this.datePipe.transform(this.fechaPrevistaEntrega, 'dd-MM-yyyy');
        console.log(this.trabajo);
        this.trabajoService.edit(this.trabajo).subscribe(
            (data) => {
                this.alertService.success('Trabajo para continuar luego agregado correctamente.', 3000);
                this.completed = true;
                this.router.navigate(['/app/trabajos/monitorfacturacion/recuperar']);
            });

    }

    dateFromString(str: string): Date {
        const aux: string[] = str.split('-');
        return new Date(+aux[2], +aux[1] - 1, +aux[0]);
    }

}
