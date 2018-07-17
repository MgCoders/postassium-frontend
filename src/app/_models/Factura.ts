import { FacturaLinea } from './FacturaLinea';
import { Trabajo } from './models';

export interface Factura {

    id?: number;

    trabajo: Trabajo;

    moneda: string;

    formaPago: string;

    fecha: string;

    iva: number;

    observaciones: string;

    nroFactura: number;

    nroRemito: number;

    lineas: FacturaLinea[];

    borrado: number;
}
