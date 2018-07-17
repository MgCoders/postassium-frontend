import { Component, OnDestroy, OnInit } from '@angular/core';
import { PuntoControl } from '../../_models/PuntoControl';
import { PuntoControlService } from '../../_services/punto-control.services';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { TrabajoService } from '../../_services/trabajo.service';
import { Trabajo } from '../../_models/Trabajo';
import { AltaMonitorFacturacionTrabajosComponent } from '../alta-monitorfacturacion-trabajos/alta-monitorfacturacion-trabajos.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-monitorfacturacion',
  templateUrl: './monitorfacturacion-trabajos.component.html',
  styleUrls: ['./monitorfacturacion-trabajos.component.scss']
})
export class MonitorFacturacionTrabajosComponent implements OnInit {

  public listaParaFacturar: Trabajo[];
  public listaEnEspera: Trabajo[];
  public estado: string;
  public titulo: string;
  // public trabajo: Trabajo;

  constructor(public dialog: MatDialog,
              private trabajoService: TrabajoService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router,
              private layoutService: LayoutService) { }

  ngOnInit() {
      this.layoutService.updatePreloaderState('active');
      this.loadData();
      this.layoutService.updatePreloaderState('hide');
  }
  loadData() {
    // this.layoutService.updatePreloaderState('active');
    this.listaParaFacturar = new Array();
    this.listaEnEspera = new Array();
    this.titulo = '';
    this.route.params.subscribe((params) => {
        switch (params['tipo']) {
              case 'factura':
                  this.estado = 'PENDIENTE_FACTURA';
                  this.titulo = 'Trabajos a facturar';
                  break;
              case 'remito':
                  this.estado = 'PENDIENTE_REMITO';
                  this.titulo = 'Trabajos a remito';
                  break;
              case 'progreso':
                  this.estado = 'EN_PROCESO';
                  this.titulo = 'Trabajos en proceso';
                  break;
              case 'finalizado':
                  this.estado = 'FINALIZADO';
                  this.titulo = 'Trabajos finalizados';
                  break;
            case 'valores':
                this.estado = 'PENDIENTE_ASIGNACION_VALORES,PENDIENTE_REMITO';
                this.titulo = 'Trabajos para asignar valores';
                break;
              case 'todos':
                  this.estado = 'TODOS';
                  this.titulo = 'Trabajos';
                  break;
          }
        if (this.estado !== 'TODOS') {
            this.trabajoService.getByEstados(this.estado).subscribe(
                (data) => {
                    this.listaParaFacturar = data;
                },
                (error) => {
                    this.alertService.error(error, 5000);
                });
        } else {
            this.trabajoService.getAll().subscribe(
                (data) => {
                    this.listaParaFacturar = data;
                },
                (error) => {
                    this.alertService.error(error, 5000);
                });
        }
    });

    this.trabajoService.getByEstado('EN_ESPERA').subscribe(
          (data) => {
              this.listaEnEspera = data;
          },
          (error) => {
              this.alertService.error(error, 5000);
          });
    // this.layoutService.updatePreloaderState('hide');
  }

  asignarFactura(x: Trabajo) {
    const dialog = this.dialog.open(AltaMonitorFacturacionTrabajosComponent, {
    data: [x, 'factura', this.listaParaFacturar],
    width: '600px',
  });
    dialog.afterClosed().subscribe(
        (result) => {
          console.log(result);
          if (result === 1) {
            this.loadData();
          }
        });
  }

    asignarRemito(x: Trabajo) {
        const dialog = this.dialog.open(AltaMonitorFacturacionTrabajosComponent, {
            data: [x, 'remito', this.listaParaFacturar],
            width: '600px',
        });
        dialog.afterClosed().subscribe(
            (result) => {
                console.log(result);
                if (result === 1) {
                    this.loadData();
                }
            });
    }

  ponerEnEspera(x: Trabajo) {
      const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea marcar en espera el trabajo #' + x.id + '?',
  });
      dialogRef.afterClosed().subscribe(
          (result) => {
              if (result) {
                  x.estado = 'EN_ESPERA';
                  this.trabajoService.edit(x).subscribe(
                      (data) => {
                          this.loadData();
                      },
                      (error) => {
                          this.alertService.error(error, 5000);
                      });
                  this.alertService.success('Trabajo marcado en espera correctamente.', 3000);
              }
          });
  }

  aFacturar(x: Trabajo) {
      const dialogRef = this.dialog.open(DialogConfirmComponent, {
          data: '¿Está seguro que desea marcar para facturar el trabajo #' + x.id + '?',
      });
      dialogRef.afterClosed().subscribe(
          (result) => {
              if (result) {
                  x.estado = 'PENDIENTE_FACTURA';
                  this.trabajoService.edit(x).subscribe(
                      (data) => {
                          this.loadData();
                      },
                      (error) => {
                          this.alertService.error(error, 5000);
                      });
                  this.alertService.success('Trabajo marcado para facturar correctamente.', 3000);
              }
          });
  }

  verDetalle(x: Trabajo) {
      console.log(x.id);
      this.router.navigate(['/app/trabajos/detalle/', x.id]);
  }

  verPDF(x: Trabajo) {
    this.trabajoService.getPDF(x.id).subscribe(
        (data) => {
            const b: Blob = data.slice(0, data.size, 'application/pdf');
            const url = window.URL.createObjectURL(b);
            window.open(url);
        },
        (error) => {
            this.alertService.error('ERROR al intetar obtener el PDF: ' + error, 5000);
        },
    );
  }
}
