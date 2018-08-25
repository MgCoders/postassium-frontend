/**
 * Created by msteglich on 2/5/18.
 */
import * as models from './models';

export interface Trabajo {

    id?: number;
    cliente: models.Cliente;
    equipo: models.Equipo;
    motivoVisita: string;
    fechaRecepcion: string;
    fechaProvistaEntrega: string;
    requierePresupuesto: boolean;
    comentarios: string;
    estado: string;
    // dibujoEquipoRecepcion: string;
    kmEquipoRecepcion: number;
    // firmaClienteRecepcion: string;
    nombreClienteRecepcion: string;
    nroFactura: number;
    nroRemito: number;
    nroOrdenCompra: string;

    equipoDocumentos: boolean;
    equipoRadio: boolean;
    equipoExtintor: boolean;
    equipoBalizas: boolean;
    equipoLlaveRuedas: boolean;
    equipoHerramientas: boolean;
    equipoManuales: boolean;
    equipoFrenteRadio: boolean;
    equipoMangueraCabina: boolean;
    equipoCenicero: boolean;
    equipoGatoPalanca: boolean;
    equipoParabrisasSano: boolean;
    equipoVidriosLaterales: boolean;
    equipoVidriosLateralesSanos: boolean;
    equipoEspejos: boolean;
    equipoEspejosSanos: boolean;
    equipoSenalerosSanos: boolean;
    equipoLucesTraserasSanas: boolean;
    equipoRayones: boolean;
    equipoAbollones: boolean;
    equipoAuxiliar: boolean;
    equipoAuxiliarArmada: boolean;
    equipoCantidadCombustible: number;
    esReparacion: boolean;
    paraFinalizar: boolean;

    numeroTrabajo: string;
    cotizacion: string;

}
