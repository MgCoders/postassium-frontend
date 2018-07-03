/**
 * Created by msteglich on 2/5/18.
 */
import * as models from './models';

export class TrabajoImp implements models.Trabajo {
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
    nroOrdenCompra: number;

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

    public constructor(x: models.Trabajo) {
        this.id = x.id;
        this.motivoVisita = x.motivoVisita;
        this.fechaRecepcion = x.fechaRecepcion;
        this.fechaProvistaEntrega = x.fechaProvistaEntrega;
        this.comentarios = x.comentarios;
        this.estado = x.estado;
        this.requierePresupuesto = x.requierePresupuesto;
        this.kmEquipoRecepcion = x.kmEquipoRecepcion;
        this.nombreClienteRecepcion = x.nombreClienteRecepcion;
        this.nroFactura = x.nroFactura;
        this.nroRemito = x.nroRemito;
        this.nroOrdenCompra = x.nroOrdenCompra;
        this.cliente = x.cliente;
        this.equipo = x.equipo;
        this.esReparacion = x.esReparacion;

        this.equipoDocumentos = x.equipoDocumentos;
        this.equipoRadio = x.equipoRadio;
        this.equipoExtintor = x.equipoExtintor;
        this.equipoBalizas = x.equipoBalizas;
        this.equipoLlaveRuedas = x.equipoLlaveRuedas;
        this.equipoHerramientas = x.equipoHerramientas;
        this.equipoManuales = x.equipoManuales;
        this.equipoFrenteRadio = x.equipoFrenteRadio;
        this.equipoMangueraCabina = x.equipoMangueraCabina;
        this.equipoCenicero = x.equipoCenicero;
        this.equipoGatoPalanca = x.equipoGatoPalanca;
        this.equipoParabrisasSano = x.equipoParabrisasSano;
        this.equipoVidriosLaterales = x.equipoVidriosLaterales;
        this.equipoVidriosLateralesSanos = x.equipoVidriosLateralesSanos;
        this.equipoEspejos = x.equipoEspejos;
        this.equipoEspejosSanos = x.equipoEspejosSanos;
        this.equipoSenalerosSanos = x.equipoSenalerosSanos;
        this.equipoLucesTraserasSanas = x.equipoLucesTraserasSanas;
        this.equipoRayones = x.equipoRayones;
        this.equipoAbollones = x.equipoAbollones;
        this.equipoAuxiliar = x.equipoAuxiliar;
        this.equipoAuxiliarArmada = x.equipoAuxiliarArmada;
        this.equipoCantidadCombustible  = x.equipoCantidadCombustible;
    }

}
