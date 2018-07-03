import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { Trabajo } from "../../_models/Trabajo";

@Component({
  selector: 'app-informacion-recibo',
  templateUrl: './informacion-recibo.component.html',
  styleUrls: ['./informacion-recibo.component.scss']
})
export class InformacionReciboComponent implements OnInit {

    public trabajo: Trabajo;

    constructor(
      public dialogRef: MatDialogRef<InformacionReciboComponent>,
      @Inject(MAT_DIALOG_DATA) public data: [Trabajo],
      private alertService: AlertService,
      private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.trabajo = this.data[0];
  }

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    this.data[0] = this.trabajo;
    this.dialogRef.close();
    this.layoutService.updatePreloaderState('hide');
  }

}
