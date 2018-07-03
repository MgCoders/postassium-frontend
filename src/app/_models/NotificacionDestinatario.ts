import * as models from './models';

export interface NotificacionDestinatario {
    id?: number;
    tipo: NotificacionDestinatario.TipoEnum;
    usuario: models.Usuario;
}

export namespace NotificacionDestinatario {
    export type TipoEnum = 'LOGIN' | 'CARGAR_VALORES' | 'FACTURA_ERP' | 'GENERAR_REMITO'
        | 'DEADLINE' | 'TRABAJO_ATRASADO' | 'IMPRIMIR_FICHA';
    export const TipoEnum = {
        LOGIN: 'LOGIN' as TipoEnum,
        CARGARVALORES: 'CARGAR_VALORES' as TipoEnum,
        FACTURAERP: 'FACTURA_ERP' as TipoEnum,
        GENERARREMITO: 'GENERAR_REMITO' as TipoEnum,
        DEADLINE: 'DEADLINE' as TipoEnum,
        TRABAJOATRASADO: 'TRABAJO_ATRASADO' as TipoEnum,
        IMPRIMIR_FICHA: 'IMPRIMIR_FICHA' as TipoEnum
    }
}
