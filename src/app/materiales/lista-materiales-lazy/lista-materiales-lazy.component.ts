import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialDataSource } from '../../_datasources/material.datasource';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { MaterialService } from '../../_services/material.service';
import { MatDialog, MatPaginator } from '@angular/material';
import { Material } from '../../_models/Material';
import { AltaMaterialComponent } from '../alta-material/alta-material.component';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'app-lista-materiales-lazy',
  templateUrl: './lista-materiales-lazy.component.html',
  styleUrls: ['./lista-materiales-lazy.component.scss']
})
export class ListaMaterialesLazyComponent implements OnInit, AfterViewInit {

  public datasource: MaterialDataSource;
  public displayedColumns= ['codigo', 'nombre', 'tipo', 'edit-material'];
  public total: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') input: ElementRef;

  constructor(
      public dialog: MatDialog,
      private materialService: MaterialService,
      private alertService: AlertService,
      private layoutService: LayoutService) { }

  ngOnInit() {
    this.datasource = new MaterialDataSource(this.materialService);
    this.materialService.count().subscribe(
        (data) => {
          this.total = data;
          this.datasource.loadMateriales(0, 50, '');
        },
        (error) => {
          this.alertService.error(error, 5000);
        }
    );
  }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
            debounceTime(150),
            distinctUntilChanged(),
            tap(() => {
              this.paginator.pageIndex = 0;
              this.loadMaterialesPage();
            })
        )
        .subscribe();

    this.paginator.page.subscribe(
        () => this.loadMaterialesPage()
    );
  }

  loadMaterialesPage() {
    this.datasource.loadMateriales(
        this.paginator.pageIndex,
        this.paginator.pageSize,
        this.input.nativeElement.value);
  }

  onRowClicked(row: Material) {
    console.log('onRowClicked');
    console.log(row);
  }

  nuevo() {
    const dialog = this.dialog.open(AltaMaterialComponent, {
      data: {},
      width: '600px',
    });

    dialog.afterClosed().subscribe(
        (result) => {
          if (result === 1) {
            this.materialService.count().subscribe(
                (data) => {
                  this.total = data;
                  this.loadMaterialesPage();
                },
                (error) => {
                  this.alertService.error(error, 5000);
                }
            );
          }
        });
  }

  editar(m: Material) {
    const dialog = this.dialog.open(AltaMaterialComponent, {
      data: m,
      width: '600px',
    });
    dialog.afterClosed().subscribe(
        (result) => {
          if (result === 1) {
            this.loadMaterialesPage();
          }
        });
  }

}
