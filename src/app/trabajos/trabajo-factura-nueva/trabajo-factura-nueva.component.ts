import { Component, OnInit, Inject } from '@angular/core';
import { Factura } from '../../_models/Factura';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { ProyectoService } from '../../_services/proyecto.service';
import { LayoutService } from '../../layout/layout.service';
import { FacturaImp } from '../../_models/FacturaImp';
import { Trabajo } from '../../_models/models';

@Component({
  selector: 'app-trabajo-factura-nueva',
  templateUrl: './trabajo-factura-nueva.component.html',
  styleUrls: ['./trabajo-factura-nueva.component.scss']
})
export class TrabajoFacturaNuevaComponent implements OnInit {

  public facturaActual: Factura;
  public fechaFactura: Date = new Date();

  facturaForm: FormGroup;
  facturaLineaForm: FormGroup;

  public loading: boolean;

  constructor(public dialogRef: MatDialogRef<TrabajoFacturaNuevaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: [Factura, Factura[], Trabajo],
              private cs: ProyectoService,
              private as: AlertService,
              private layoutService: LayoutService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.facturaForm = this.formBuilder.group({
      observacionesFC: this.formBuilder.control(null, []),
      nroFacturaFC: this.formBuilder.control(null, [Validators.required, Validators.pattern('[0-9]*')]),
      nroRemitoFC: this.formBuilder.control(null, [Validators.pattern('[0-9]*')]),
    });

    this.loading = false;
    if (this.data[0] === undefined) {
      this.facturaActual = {} as Factura;
      this.facturaActual.lineas = new Array();
      this.facturaActual.observaciones = '';
    } else {
      this.facturaActual = new FacturaImp(this.data[0]);
      if (this.facturaActual.observaciones === undefined) {
        this.facturaActual.observaciones = '';
      }
    }
  }

  Cerrar() {
    this.dialogRef.close();
  }

  Guardar() {
    this.loading = true;
    this.layoutService.updatePreloaderState('active');
/*     if (this.data[0] === undefined) {
      this.cs.create(this.proyectoActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.success('Proyecto agregado correctamente.', 3000);
          this.data[1].push(data);
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.error(error, 5000);
        });
    } else {
      this.cs.edit(this.proyectoActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.success('Proyecto actualizado correctamente.', 3000);
          const index: number = this.data[1].indexOf(this.data[0]);
          this.data[1][index] = data;
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.as.error(error, 5000);
        });
    } */
  }
}
