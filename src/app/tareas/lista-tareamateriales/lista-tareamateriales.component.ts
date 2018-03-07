import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { TareaService } from '../../_services/tarea.service';
import { MatDialog } from '@angular/material';
import { TareaMaterial } from '../../_models/TareaMaterial';
import { Tarea } from '../../_models/Tarea';

@Component({
  selector: 'app-lista-tareamateriales',
  templateUrl: './lista-tareamateriales.component.html',
  styleUrls: ['./lista-tareamateriales.component.scss']
})
export class ListaTareaMaterialesComponent implements OnInit {

  tareaMateriales: TareaMaterial[];
  tarea: Tarea;
  public loadCompleted: boolean;
  tareaId: number;

  constructor(
      public dialog: MatDialog,
      private tareaService: TareaService,
      private alertService: AlertService,
      private layoutService: LayoutService,
      private router: Router,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadCompleted = false;
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
                       this.loadCompleted = true;
                   },
                   (error) => {
                       this.alertService.error(error, 5000);
                   });
               this.loadData();
              }
          });
  }

  loadData() {
    this.tareaMateriales = new Array();
    this.tareaService.getAllMaterialesByTarea(this.tarea.id).subscribe(
        (data) => {
          this.tareaMateriales = data;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {

  }

  eliminar() {

  }

  editar() {

  }

  verTrabajo() {
        // this.router.navigate(['/app/registros/listaRegistros/', this.tarea.puntoControl.trabajo.id]);
  }

}
