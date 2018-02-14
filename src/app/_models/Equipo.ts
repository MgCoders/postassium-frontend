/**
 * Created by msteglich on 2/5/18.
 */
import * as models from './models';

export interface Equipo {
    id?: number;
    cliente: models.Cliente;
    marca: string;
    modelo: string;
    matricula: string;
    color: string;
    // tipoEquipo: models.TipoEquipo;
}
