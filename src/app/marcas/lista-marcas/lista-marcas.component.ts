import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../_models/Usuario';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { UsuarioService } from '../../_services/usuario.service';
import { MatDialog } from '@angular/material';
import { AltaMarcaComponent } from '../alta-marca/alta-marca.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';
import {MarcaEquipoService} from "../../_services/marca-equipo.services";
import {MarcaEquipo} from "../../_models/MarcaEquipo";

@Component({
  selector: 'app-lista-marcas',
  templateUrl: './lista-marcas.component.html',
  styleUrls: ['./lista-marcas.component.scss']
})
export class ListaMarcasComponent implements OnInit {

  public marcas: MarcaEquipo[];

  constructor(public dialog: MatDialog,
              private marcaEquipoService: MarcaEquipoService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.layoutService.updatePreloaderState('active');
    this.marcas = new Array();
    this.marcaEquipoService.getAll().subscribe(
        (data) => {
          this.marcas = data;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaMarcaComponent, {
    data: [undefined, this.marcas],
    width: '600px',
    });
  }

  editar(u: Usuario) {
    const dialog = this.dialog.open(AltaMarcaComponent, {
      data: [u, this.marcas],
      width: '600px',
    });
  }

  eliminar(m: MarcaEquipo) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar al usuario ' + m.nombre + '?',
    });

    dialogRef.afterClosed().subscribe(
        (result) => {
          if (result) {
            // TODO llamar al service
            this.alertService.success('Marca eliminada correctamente.', 3000);
            const index: number = this.marcas.indexOf(m);
            this.marcas.splice(index, 1);
          }
        });
  }


}
