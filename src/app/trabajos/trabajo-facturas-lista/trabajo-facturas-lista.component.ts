import { Component, OnInit } from '@angular/core';
import { Factura } from '../../_models/Factura';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-trabajo-facturas-lista',
  templateUrl: './trabajo-facturas-lista.component.html',
  styleUrls: ['./trabajo-facturas-lista.component.scss']
})
export class TrabajoFacturasListaComponent implements OnInit {

  public lista: Factura[];
  public loading: number = 0;

  constructor(public dialog: MatDialog,
              //private service: ProyectoService,
              private as: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.lista = new Array();

    const f1: Factura = {} as Factura;
    f1.id = 1;
    f1.fecha = '01-07-2018';
    f1.formaPago = 'CONTADO';
    f1.iva = 22;
    f1.moneda = '$';
    f1.nroFactura = 125033;
    f1.nroRemito = undefined;
    f1.observaciones = 'Prueba Obs.';
    f1.lineas = new Array();

    this.lista.push(f1);

/*    this.layoutService.updatePreloaderState('active');
    this.loading++;
     this.service.getAll().subscribe(
      (data) => {
        this.loading--;
        this.lista = data;
        this.lista.sort((a: Factura, b: Factura) => {
          return b.id - a.id;
        });
        this.layoutService.updatePreloaderState('hide');
      },
      (error) => {
        this.loading--;
        this.layoutService.updatePreloaderState('hide');
        this.as.error(error, 5000);
      }); */
  }

  Nuevo() {
/*     const dialog = this.dialog.open(AltaProyectoComponent, {
      data: [undefined, this.lista],
      width: '600px',
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          // TODO
          this.as.success('Proyecto eliminado correctamente.', 3000);
        }
      }); */
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
/*     const dialog = this.dialog.open(AltaProyectoComponent, {
      data: [x, this.lista],
      width: '600px',
    });

    dialog.afterClosed().subscribe(
      (result) => {
        this.lista.sort((a: Factura, b: Factura) => {
          return b.id - a.id;
        });
      }); */
  }

/*   VerObservaciones(x: string) {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: ['Observaciones', x],
      width: '600px',
    });
  } */

  GetImporte(x: Factura) {
    return x.lineas.map((y) => y.precioUnitario * y.cantidad).reduce((k, l) => k + l, 0);
  }
}
