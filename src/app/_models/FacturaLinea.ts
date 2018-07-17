import {Factura} from "./Factura";
export interface FacturaLinea {

    id?: number;

    descripcion: string;

    cantidad: number;

    precioUnitario: number;

    //factura: Factura;
}
