import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialDataSource } from '../../_datasources/material.datasource';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { MaterialService } from '../../_services/material.service';
import { MatDialog, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-lista-materiales-lazy',
  templateUrl: './lista-materiales-lazy.component.html',
  styleUrls: ['./lista-materiales-lazy.component.scss']
})
export class ListaMaterialesLazyComponent implements OnInit, AfterViewInit {

  public datasource: MaterialDataSource;
  public displayedColumns= ["codigo", "nombre", "descripcion"];
  public total: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
      public dialog: MatDialog,
      private materialService: MaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService) { }

  ngOnInit() {
    this.datasource = new MaterialDataSource(this.materialService);
    this.datasource.loadMateriales(0, 50);
    this.materialService.count().subscribe(
        (data) => {
          this.total = data;
        },
        (error) => {
          this.alertService.error(error, 5000);
        }
    );
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
        () => this.loadMaterialesPage()
    );
  }

  loadMaterialesPage() {
    this.datasource.loadMateriales(
        this.paginator.pageIndex,
        this.paginator.pageSize);
  }
}
