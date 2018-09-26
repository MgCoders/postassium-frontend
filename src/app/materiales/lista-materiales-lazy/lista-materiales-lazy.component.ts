import { Component, OnInit } from '@angular/core';
import { MaterialDataSource } from '../../_datasources/material.datasource';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { MaterialService } from '../../_services/material.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-materiales-lazy',
  templateUrl: './lista-materiales-lazy.component.html',
  styleUrls: ['./lista-materiales-lazy.component.scss']
})
export class ListaMaterialesLazyComponent implements OnInit {

  public datasource: MaterialDataSource;
  public displayedColumns= ["codigo", "nombre", "description"];

  constructor(
      public dialog: MatDialog,
      private materialService: MaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService) { }

  ngOnInit() {
    this.datasource = new MaterialDataSource(this.materialService);
    this.datasource.loadMateriales(1, 10);
  }

}
