import { FacturaLinea } from './FacturaLinea';

export class FacturaLineaImp implements FacturaLinea {

    id?: number;

    descripcion: string;

    cantidad: number;

    precioUnitario: number;

    borrado: number;

    //factura: Factura;

    constructor(x: FacturaLinea) {
        this.id = x.id;
        this.descripcion = x.descripcion;
        this.cantidad = x.cantidad;
        this.precioUnitario = x.precioUnitario;
        this.borrado = x.borrado;
        //this.factura = x.factura;
    }
}
