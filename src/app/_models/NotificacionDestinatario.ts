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
        CARGAR_VALORES: 'CARGAR_VALORES' as TipoEnum,
        FACTURA_ERP: 'FACTURA_ERP' as TipoEnum,
        GENERAR_REMITO: 'GENERAR_REMITO' as TipoEnum,
        DEADLINE: 'DEADLINE' as TipoEnum,
        TRABAJO_ATRASADO: 'TRABAJO_ATRASADO' as TipoEnum,
        IMPRIMIR_FICHA: 'IMPRIMIR_FICHA' as TipoEnum
    }
}
