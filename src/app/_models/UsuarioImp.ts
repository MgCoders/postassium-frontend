/**
 * Created by pablo on 31/01/18.
 */

import { UsuarioRubro } from './UsuarioRubro';
import { UsuarioRubroImp } from './UsuarioRubroImp';
import { Usuario } from './Usuario';

export class UsuarioImp implements Usuario {

    id?: number;

    email: string;

    nombre: string;

    role: string;

    token?: string;

    password: string;

    usuarioRubros?: UsuarioRubro[];

    public constructor(x: Usuario) {
        this.id = x.id;
        this.email = x.email;
        this.nombre = x.nombre;
        this.role = x.role;
        this.token = x.token;
        this.password = x.password;
        this.usuarioRubros = new Array();
        x.usuarioRubros.forEach((y) => {
            this.usuarioRubros.push(new UsuarioRubroImp(y));
        });
    }

}
