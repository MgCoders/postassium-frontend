import { NotificacionDestinatario } from './NotificacionDestinatario';
import { Usuario } from './Usuario';
/**
 * Created by pablo on 28/06/18.
 */
export class NotificacionDestinatarioImp implements NotificacionDestinatario {

    id?: number;
    tipo: NotificacionDestinatario.TipoEnum;
    usuario: Usuario;

    public constructor(d: NotificacionDestinatario) {
        this.id = d.id;
        this.tipo = d.tipo;
        this.usuario = d.usuario;
    }
}
