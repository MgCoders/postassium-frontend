import {TipoEquipo} from "./TipoEquipo";

export class TipoEquipoImp implements TipoEquipoImp {
    id?: number;

    descripcion: string;

    dibujo: string;

    public constructor(x: TipoEquipo) {
        this.id = x.id;
        this.descripcion = x.descripcion;
        this.dibujo = x.dibujo;
    }
}
