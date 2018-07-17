import { FacturaLinea } from './FacturaLinea';
import {Factura} from "./Factura";

export class FacturaLineaImp implements FacturaLinea {

    id?: number;

    descripcion: string;

    cantidad: number;

    precioUnitario: number;

    //factura: Factura;

    constructor(x: FacturaLinea) {
        this.id = x.id;
        this.descripcion = x.descripcion;
        this.cantidad = x.cantidad;
        this.precioUnitario = x.precioUnitario;
        //this.factura = x.factura;
    }
}
