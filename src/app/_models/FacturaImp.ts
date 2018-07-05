import { FacturaLinea } from './FacturaLinea';
import { Trabajo } from './models';
import { Factura } from './Factura';
import { FacturaLineaImp } from './FacturaLineaImp';

export class FacturaImp implements Factura {

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

    constructor(x: Factura) {
        this.id = x.id;
        this.trabajo = x.trabajo;
        this.moneda = x.moneda;
        this.formaPago = x.formaPago;
        this.fecha = x.fecha;
        this.iva = x.iva;
        this.observaciones = x.observaciones;
        this.nroFactura = x.nroFactura;
        this.nroRemito = x.nroRemito;

        this.lineas = new Array();
        x.lineas.forEach((y) => {
            this.lineas.push(new FacturaLineaImp(y));
        });
    }
}
