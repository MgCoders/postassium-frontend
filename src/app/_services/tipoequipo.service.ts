import { Injectable } from '@angular/core';
import { TipoMaterial } from '../_models/TipoMaterial';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {TipoEquipo} from '../_models/TipoEquipo';
/**
 * Created by pablo on 04/03/18.
 */
@Injectable()
export class TipoEquipoService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<TipoEquipo[]> {
        return this.http.get<TipoEquipo[]>(`${environment.apiUrl}/tiposequipos/`);
    }

}
