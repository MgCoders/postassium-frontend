import { FacturaLinea } from './FacturaLinea';

export class FacturaLineaImp implements FacturaLinea {

    id?: number;

    descripcion: string;

    cantidad: number;

    precioUnitario: number;

    constructor(x: FacturaLinea) {
        this.id = x.id;
        this.descripcion = x.descripcion;
        this.cantidad = x.cantidad;
        this.precioUnitario = x.precioUnitario;
    }
}
