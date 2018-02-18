import { Component, Inject, OnInit } from '@angular/core';
import { Rubro } from '../../_models/Rubro';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RubroService } from '../../_services/rubro.service';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { RubroImp } from '../../_models/RubroImp';

@Component({
  selector: 'app-alta-rubro',
  templateUrl: './alta-rubro.component.html',
  styleUrls: ['./alta-rubro.component.scss']
})
export class AltaRubroComponent implements OnInit {

  public rubroActual: Rubro;

  constructor(public dialogRef: MatDialogRef<AltaRubroComponent>,
              @Inject(MAT_DIALOG_DATA) public rubro: Rubro,
              private rubroService: RubroService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    if (this.rubro.id == null) {
      this.rubroActual = {} as Rubro;
    } else {
      this.rubroActual = new RubroImp(this.rubro);
    }
  }

  guardar() {
    this.layoutService.updatePreloaderState('active');
    if (this.rubro.id == null) {
      this.rubroService.create(this.rubroActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Rubro agregado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    } else {
      this.rubroService.edit(this.rubroActual).subscribe(
          (data) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.success('Rubro actualizado correctamente.', 3000);
            this.dialogRef.close(1);
          },
          (error) => {
            this.layoutService.updatePreloaderState('hide');
            this.alertService.error(error, 5000);
          });
    }
  }
}
