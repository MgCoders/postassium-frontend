import { Component, Inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TipoEquipo } from '../../_models/TipoEquipo';
import { TipoEquipoImp } from '../../_models/TipoEquipoImp';
import { TipoEquipoService } from '../../_services/tipoequipo.service';

@Component({
  selector: 'app-alta-tipomaterial',
  templateUrl: './alta-tipoequipo.component.html',
  styleUrls: ['./alta-tipoequipo.component.scss']
})
export class AltaTipoEquipoComponent implements OnInit {

  tipoEquipoActual: TipoEquipo;
  loading: boolean;
  public descripcionFC = new FormControl('', [Validators.required]);
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<AltaTipoEquipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [TipoEquipo, TipoEquipo[]],
    private service: TipoEquipoService,
    private alertService: AlertService,
    private layoutService: LayoutService,
  ) {
  }

  ngOnInit() {
    this.loading = false;
    if (this.data[0] === undefined) {
      this.tipoEquipoActual = {} as TipoEquipo;
      this.tipoEquipoActual.requiereInfoRecibo = false;
      this.tipoEquipoActual.descripcion = '';
      this.tipoEquipoActual.dibujo = undefined;
    } else {
      this.tipoEquipoActual = new TipoEquipoImp(this.data[0]);
    }
  }

  guardar() {
    this.loading = true;
    this.layoutService.updatePreloaderState('active');
    if (this.data[0] === undefined) {
      this.service.create(this.tipoEquipoActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.alertService.success('Tipo de Equipo agregado correctamente.', 3000);
          this.data[1].push(data);
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.alertService.error(error, 5000);
        });
    } else {
      this.service.edit(this.tipoEquipoActual).subscribe(
        (data) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.alertService.success('Tipo de Equipo actualizado correctamente.', 3000);
          const index: number = this.data[1].indexOf(this.data[0]);
          this.data[1][index] = data;
          this.dialogRef.close();
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.loading = false;
          this.alertService.error(error, 5000);
        });
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.tipoEquipoActual.dibujo = reader.result;
/*         this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        }) */
      };
    }
  }

  clearFile() {
    this.fileInput.nativeElement.value = '';
    this.tipoEquipoActual.dibujo = undefined;
  }
}
