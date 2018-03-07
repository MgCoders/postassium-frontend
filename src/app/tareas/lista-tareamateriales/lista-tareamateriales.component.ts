import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
      public dialog: MatDialog,
      private tareaService: TareaService,
      private alertService: AlertService,
      private layoutService: LayoutService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.layoutService.updatePreloaderState('active');
    this.tareaService.get(1).subscribe(
        (data) => {
          this.tarea = data;
          this.loadCompleted = true;
          this.loadData();
        },
        (error) => {
          this.alertService.error(error, 5000);
        }
    );
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

}
