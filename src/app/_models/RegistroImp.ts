import { Registro } from './Registro';
import * as models from './models';
/**
 * Created by pablo on 03/03/18.
 */
export class RegistroImp implements Registro {

    id?: number;

    minutos: number;

    fecha: string;

    borrado?: number;

    usuario?: models.Usuario;

    tarea: models.Tarea;

    rubro?: models.Rubro;

    public constructor(r: Registro) {
        this.id = r.id;
        this.minutos = r.minutos;
        this.fecha = r.fecha;
        this.borrado = r.borrado;
        this.usuario = r.usuario;
        this.tarea = r.tarea;
        this.rubro = r.rubro;
    }

}
