/**
 * Created by pablo on 31/01/18.
 */


import * as models from './models';

export class RubroImp implements models.Rubro {
    id?: number;

    nombre: string;

    public constructor(x: models.Rubro) {
        this.id = x.id;
        this.nombre = x.nombre;
    }

}
