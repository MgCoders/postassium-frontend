import { Component, OnInit, Inject } from '@angular/core';
import { Factura } from '../../_models/Factura';
import { FormControl, FormGroup, FormBuilder, Validators, MaxLengthValidator } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { FacturaImp } from '../../_models/FacturaImp';
import { Trabajo } from '../../_models/models';
import { DatePipe } from '@angular/common';
import { CustomDatePipe } from '../../_pipes/customDate.pipe';
import { FacturaLinea } from '../../_models/FacturaLinea';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import { FacturaLineaImp } from '../../_models/FacturaLineaImp';
import { FacturaService } from '../../_services/factura.service';

@Component({
  selector: 'app-trabajo-factura-nueva',
  templateUrl: './trabajo-factura-nueva.component.html',
  styleUrls: ['./trabajo-factura-nueva.component.scss']
})
export class TrabajoFacturaNuevaComponent implements OnInit {

  public facturaActual: Factura;
  public fechaFactura: Date;
  public facturaLineaActual: FacturaLinea;

  facturaForm: FormGroup;
  facturaLineaForm: FormGroup;

  public loading: boolean;

  constructor(public dialogRef: MatDialogRef<TrabajoFacturaNuevaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [Factura, Factura[], Trabajo],
              private as: AlertService,
              private datePipe: DatePipe,
              private customDatePipe: CustomDatePipe,
              private layoutService: LayoutService,
              private formBuilder: FormBuilder,
              public dialog: MatDialog,
              public service: FacturaService) { }

  ngOnInit() {

    this.facturaForm = this.formBuilder.group({
      fechaFacturaFC: this.formBuilder.control(null, [Validators.required]),
      observacionesFC: this.formBuilder.control(null, [Validators.maxLength(256)]),
      nroFacturaFC: this.formBuilder.control(null, [Validators.pattern('[0-9]+')]),
      nroRemitoFC: this.formBuilder.control(null, [Validators.pattern('[0-9]+')]),
    });

    this.facturaLineaForm = this.formBuilder.group({
      lineaDescripcionFC: this.formBuilder.control(null, [Validators.required]),
      lineaCantidadFC: this.formBuilder.control(null, [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
      lineaPrecioUnitarioFC: this.formBuilder.control(null, [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
    });

    this.facturaLineaActual = {} as FacturaLinea;

    this.loading = false;
    if (this.data[0] === undefined) {
      this.facturaActual = {} as Factura;
      this.facturaActual.lineas = new Array();
      this.facturaActual.observaciones = '';
      this.fechaFactura = new Date();
      this.facturaActual.trabajo = this.data[2];
    } else {
      this.facturaActual = new FacturaImp(this.data[0]);
      if (this.facturaActual.observaciones === undefined) {
        this.facturaActual.observaciones = '';
      }
      this.fechaFactura = this.customDatePipe.transform(this.data[0].fecha, ['dd-mm-yyyy']);
    }
  }

  Cerrar() {
    this.dialogRef.close();
  }

  Guardar() {
    this.loading = true;
    this.facturaActual.fecha = this.datePipe.transform(this.fechaFactura, 'dd-MM-yyyy');
    this.facturaActual.trabajo = this.data[2];

    this.layoutService.updatePreloaderState('active');
    if (this.data[0] === undefined) {
      this.service.create(this.facturaActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.success('Factura agregada correctamente.', 3000);
          this.data[1].push(data);
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.error(error, 5000);
        });
    } else {
      this.service.edit(this.facturaActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.success('Factura actualizada correctamente.', 3000);
          const index: number = this.data[1].indexOf(this.data[0]);
          this.data[1][index] = data;
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.error(error, 5000);
        });
    }
  }

  EliminarLinea(x: FacturaLinea) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar la línea ' + x.id + '?',
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.facturaActual.lineas.splice(this.facturaActual.lineas.indexOf(x), 1);
        }
      });
  }

  AgregarLineaOnClick() {
    this.facturaActual.lineas.push(new FacturaLineaImp(this.facturaLineaActual));
    this.facturaLineaActual = {} as FacturaLinea;
    this.facturaLineaForm.markAsUntouched();
  }

  GetSubTotal() {
    return this.facturaActual.lineas.map((y) => y.precioUnitario * y.cantidad).reduce((k, l) => k + l, 0);
  }

  GetIVA() {
    let iva: number = this.facturaActual.lineas.map((y) => y.precioUnitario * y.cantidad).reduce((k, l) => k + l, 0);
    iva = iva * (this.facturaActual.iva / 100);
    return  iva;
  }

  GetTotal() {
    return this.GetIVA() + this.GetSubTotal();
  }
}
