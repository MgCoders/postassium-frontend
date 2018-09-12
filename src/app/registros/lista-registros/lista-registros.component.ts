import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../_services/registro.service';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../_services/alert.service';
import { LayoutService } from '../../layout/layout.service';
import { Tarea } from '../../_models/Tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../_services/tarea.service';
import { Registro } from '../../_models/Registro';
import { AltaRegistroComponent } from '../alta-registro/alta-registro.component';

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.scss']
})
export class ListaRegistrosComponent implements OnInit {

  registros: Registro[];
  tarea: Tarea;
  tareaId: number;

  constructor(
      public dialog: MatDialog,
      private registroService: RegistroService,
      private alertService: AlertService,
      private layoutService: LayoutService,
      private route: ActivatedRoute,
      private tareaService: TareaService,
      private router: Router
  ) { }

  ngOnInit() {
    this.layoutService.updatePreloaderState('active');
    this.route.params.subscribe(
        (params) => {
          this.tareaId = params['id'];
          if (isNaN(this.tareaId)) {
            this.alertService.error('Error al invocar la url. Se debe pasar parámetro numérico', 5000);
            this.layoutService.updatePreloaderState('hide');
          } else {
            this.tareaService.get(this.tareaId).subscribe(
              (datatarea) => {
                this.tarea = datatarea;
              },
              (error) => {
                this.alertService.error(error, 5000);
            });
            this.loadData();
          }
        });

  }

  loadData() {
    this.registros = new Array();
    this.registroService.getAllByTarea(this.tareaId).subscribe(
        (registro) => {
          this.registros = registro;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.alertService.error(error, 5000);
          this.layoutService.updatePreloaderState('hide');
        }
    );
  }

  nuevo() {
      const dialog = this.dialog.open(AltaRegistroComponent, {
          data: [undefined, this.tarea],
          width: '600px',
      });

      dialog.afterClosed().subscribe(
          (result) => {
              if (result === 1) {
                  this.loadData();
              }
          });
  }

  editar(r: Registro) {
      const dialog = this.dialog.open(AltaRegistroComponent, {
          data: [r, undefined],
          width: '600px',
      });

      dialog.afterClosed().subscribe(
          (result) => {
              if (result === 1) {
                  this.loadData();
              }
          });
  }

  eliminar(r: Registro) {
      console.log("registro eliminado");
  }

    verTrabajo() {
        this.router.navigate(['/app/trabajos/detalle/', this.tarea.puntoControl.trabajo.id]); // TODO pasa el id del trabajo por url
    }
}
