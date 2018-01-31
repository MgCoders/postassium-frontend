/**
 * Created by pablo on 31/01/18.
 */

import * as models from './models';

export class UsuarioRubroImp implements models.UsuarioRubro {

    id?: number;

    rubro?: models.Rubro;

    public constructor(x: models.UsuarioRubro) {
        this.id = x.id;
        this.rubro = x.rubro;
    }

}
