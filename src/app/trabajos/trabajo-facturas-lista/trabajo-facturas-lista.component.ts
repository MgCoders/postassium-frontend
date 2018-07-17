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
import { ActivatedRoute } from '@angular/router';
import { Trabajo } from '../../_models/models';
import { TrabajoFacturaViewComponent } from '../trabajo-factura-view/trabajo-factura-view.component';

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

  constructor(public dialog: MatDialog,
              private as: AlertService,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
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
  }

  Nuevo() {
    this.dialog.open(TrabajoFacturaNuevaComponent, {
      data: [undefined, this.lista, this.trabajoActual],
      width: '1000px',
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
