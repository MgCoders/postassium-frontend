import { PuntoControl } from './PuntoControl';
import { TareaImp } from './TareaImp';
import { Tarea } from './Tarea';
import { Usuario } from './Usuario';

export class PuntoControlImp implements PuntoControl {
    id?: number;

    nombre: string;

    // trabajo: models.Trabajo;

    responsable?: Usuario;

    orden: number;

    tareas?: Tarea[];

    constructor(x: PuntoControl) {
        this.nombre = x.nombre;
        this.responsable = x.responsable;
        this.orden = x.orden;
        this.tareas = new Array();
        x.tareas.forEach(
            (y) => {
                this.tareas.push(new TareaImp(y));
            });
    }

}
