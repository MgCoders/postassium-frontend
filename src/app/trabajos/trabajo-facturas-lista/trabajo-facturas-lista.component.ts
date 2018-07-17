import { Component, OnInit } from '@angular/core';
import { Factura } from '../../_models/Factura';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { TrabajoFacturaNuevaComponent } from '../trabajo-factura-nueva/trabajo-factura-nueva.component';
import { DialogInfoComponent } from '../../shared/dialog-info/dialog-info.component';
import { TrabajoService } from '../../_services/trabajo.service';
import { FacturaService } from '../../_services/factura.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Trabajo } from '../../_models/models';
import { TrabajoFacturaViewComponent } from '../trabajo-factura-view/trabajo-factura-view.component';
import {AltaMonitorFacturacionTrabajosComponent} from '../alta-monitorfacturacion-trabajos/alta-monitorfacturacion-trabajos.component';

@Component({
  selector: 'app-trabajo-facturas-lista',
  templateUrl: './trabajo-facturas-lista.component.html',
  styleUrls: ['./trabajo-facturas-lista.component.scss']
})
export class TrabajoFacturasListaComponent implements OnInit {

  public lista: Factura[];
  public loading: number = 0;
  public trabajoActual: Trabajo;
  public idTrabajoActual: number;

  public paraFinalizar: boolean;
  public paraFinalizarFacturacion: boolean;

  constructor(public dialog: MatDialog,
              private as: AlertService,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private router: Router,
              private service: FacturaService,
              private trabajoService: TrabajoService) { }

  ngOnInit() {
    this.lista = new Array();

    this.route.params.subscribe((params) => {
      this.idTrabajoActual = +params['id'];

      this.loading++;
      this.layoutService.updatePreloaderState('active');
      this.trabajoService.get(this.idTrabajoActual).subscribe(
        (data) => {
          this.trabajoActual = data;
          this.service.getByTrabajo(this.idTrabajoActual).subscribe(
            (dataF) => {
              this.loading--;
              this.layoutService.updatePreloaderState('hide');
              this.lista = dataF;
              this.paraFinalizar = this.trabajoActual.estado === 'PENDIENTE_ASIGNACION_VALORES' && this.lista.length > 0;
              this.paraFinalizarFacturacion = true;
              this.lista.forEach(
                  (factura) => {
                    if (factura.nroFactura === undefined) {
                      this.paraFinalizarFacturacion = false;
                    }
                  }
              );

              console.log(this.paraFinalizar);
            },
            (errorF) => {
              this.loading--;
              this.layoutService.updatePreloaderState('hide');
              this.as.error('Error al cargar la lista de facturas: ' + errorF, 5000);
            }
          );
        },
        (error) => {
          this.loading--;
          this.layoutService.updatePreloaderState('hide');
          this.as.error('Error al cargar el trabajo: ' + error, 5000);
        }
      );
    });
    console.log(this.trabajoActual);
  }

  Nuevo() {
    const dialogRef = this.dialog.open(TrabajoFacturaNuevaComponent, {
      data: [undefined, this.lista, this.trabajoActual],
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(
        (result) => {
          this.paraFinalizar = this.trabajoActual.estado === 'PENDIENTE_ASIGNACION_VALORES' && this.lista.length > 0;
        });
  }

  Eliminar(x: Factura) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar la factura ' + x.nroFactura + '?',
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        this.lista.sort((a: Factura, b: Factura) => {
          return b.id - a.id;
        });
      });
  }

  Editar(x: Factura) {
    const dialog = this.dialog.open(TrabajoFacturaNuevaComponent, {
      data: [x, this.lista, this.trabajoActual],
      width: '1000px',
    });

    dialog.afterClosed().subscribe(
    (result) => {
      this.lista.sort((a: Factura, b: Factura) => {
        return b.id - a.id;
      });
    });
  }

  AsignarNroFactura(x: Factura) {
    const dialog = this.dialog.open(AltaMonitorFacturacionTrabajosComponent, {
      data: [this.trabajoActual, 'factura', x],
      width: '600px',
    });

    dialog.afterClosed().subscribe(
        (result) => {
          this.paraFinalizarFacturacion = true;
          this.lista.forEach(
              (factura) => {
                if (factura.nroFactura === undefined) {
                  this.paraFinalizarFacturacion = false;
                }
              }
          );
        });

  }

  VerObservaciones(x: string) {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: ['Observaciones', x],
      width: '600px',
    });
  }

  GetImporte(x: Factura) {
    const subTotal: number = x.lineas.map((y) => y.precioUnitario * y.cantidad).reduce((k, l) => k + l, 0);
    return subTotal + (subTotal * (x.iva / 100));
  }

  finalizarAsignacionValores() {
    this.trabajoActual.estado = 'PENDIENTE_FACTURA';
    this.trabajoService.edit(this.trabajoActual).subscribe();
    this.router.navigate(['/app/trabajos/monitorfacturacion/valores/']);
  }

  finalizarFacturacion() {
    this.trabajoActual.estado = 'FINALIZADO';
    this.trabajoService.edit(this.trabajoActual).subscribe();
    this.router.navigate(['/app/trabajos/monitorfacturacion/factura/']);
  }

  VerFactura(x: Factura) {
    const dialogRef = this.dialog.open(TrabajoFacturaViewComponent, {
      data: [x, this.trabajoActual],
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(
    (result) => {
      this.lista.sort((a: Factura, b: Factura) => {
        return b.id - a.id;
      });
    });
  }
}
