
import * as models from './models';

export interface PuntoControl {
    id?: number;

    nombre: string;

    trabajo: models.Trabajo;

    responsable?: models.Usuario;


    orden: number;

    //tareas?: models.Tarea[];

    verificado: boolean;

    paraVerificar: boolean;

    responsable2?: models.Usuario;

    verificado2: boolean;

}
