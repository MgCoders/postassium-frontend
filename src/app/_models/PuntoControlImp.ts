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

    responsable2?: Usuario;

    verificado2: boolean;

    constructor(x: PuntoControl) {
        this.id = x.id;
        this.nombre = x.nombre;
        this.responsable = x.responsable;
        this.orden = x.orden;
        this.trabajo = x.trabajo;
        this.verificado = x.verificado;
        this.paraVerificar = x.paraVerificar;
        this.verificado2 = x.verificado;
        this.responsable2 = x.responsable2;
        /*this.tareas = new Array();
        x.tareas.forEach(
            (y) => {
                this.tareas.push(new TareaImp(y));
            });*/
    }

}
