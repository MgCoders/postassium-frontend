import { TareaMaterial } from './TareaMaterial';
import { Material } from './Material';
/**
 * Created by pablo on 06/03/18.
 */
export class TareaMaterialImp implements TareaMaterial {
    id?: number;

    cantidad?: number;

    material: Material;

    public constructor(tm: TareaMaterial) {
        this.id = tm.id;
        this.cantidad = tm.cantidad;
        this.material = tm.material;
    }
}
