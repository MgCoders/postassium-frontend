import { PuntoControl } from './PuntoControl';
import { TareaImp } from './TareaImp';
import { Tarea } from './Tarea';
import { Usuario } from './Usuario';
import { Trabajo } from './Trabajo';

export class PuntoControlImp implements PuntoControl {
    id?: number;

    nombre: string;

    trabajo: Trabajo;

    responsable?: Usuario;

    orden: number;

    tareas?: Tarea[];

    verificado: boolean;

    paraVerificar: boolean;

    constructor(x: PuntoControl) {
        this.nombre = x.nombre;
        this.responsable = x.responsable;
        this.orden = x.orden;
        this.trabajo = x.trabajo;
        this.verificado = x.verificado;
        this.paraVerificar = x.paraVerificar;
        this.tareas = new Array();
        x.tareas.forEach(
            (y) => {
                this.tareas.push(new TareaImp(y));
            });
    }

}
