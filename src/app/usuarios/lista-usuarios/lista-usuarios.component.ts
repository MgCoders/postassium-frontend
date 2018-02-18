import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../_models/Usuario';
import { LayoutService } from '../../layout/layout.service';
import { AlertService } from '../../_services/alert.service';
import { UsuarioService } from '../../_services/usuario.service';
import { MatDialog } from '@angular/material';
import { AltaUsuarioComponent } from '../alta-usuario/alta-usuario.component';
import { DialogConfirmComponent } from '../../shared/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(public dialog: MatDialog,
              private usuarioService: UsuarioService,
              private alertService: AlertService,
              private layoutService: LayoutService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.layoutService.updatePreloaderState('active');
    this.usuarios = new Array();
    this.usuarioService.getAll().subscribe(
        (data) => {
          this.usuarios = data;
          this.layoutService.updatePreloaderState('hide');
        },
        (error) => {
          this.layoutService.updatePreloaderState('hide');
          this.alertService.error(error, 5000);
        });
  }

  nuevo() {
    const dialog = this.dialog.open(AltaUsuarioComponent, {
    data: [undefined, this.usuarios],
    width: '600px',
    });
  }

  editar(u: Usuario) {
    const dialog = this.dialog.open(AltaUsuarioComponent, {
      data: [u, this.usuarios],
      width: '600px',
    });
  }

  eliminar(u: Usuario) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: '¿Está seguro que desea eliminar al usuario ' + u.nombre + '?',
    });

    dialogRef.afterClosed().subscribe(
        (result) => {
          if (result) {
            // TODO llamar al service
            this.alertService.success('Usuario eliminado correctamente.', 3000);
            const index: number = this.usuarios.indexOf(u);
            this.usuarios.splice(index, 1);
          }
        });
  }

}
