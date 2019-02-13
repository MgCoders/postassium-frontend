import { TareaMaterial } from './TareaMaterial';
import { Material } from './Material';
import { Tarea } from './Tarea';
import { UnidadMedida } from './UnidadMedida';
/**
 * Created by pablo on 06/03/18.
 */
export class TareaMaterialImp implements TareaMaterial {
    id?: number;

    cantidad?: number;

    tarea: Tarea;

    material: Material;

    unidadMedida: UnidadMedida;

    public constructor(tm: TareaMaterial) {
        this.id = tm.id;
        this.cantidad = tm.cantidad;
        this.material = tm.material;
        this.tarea = tm.tarea;
        this.unidadMedida = tm.unidadMedida;
    }
}
