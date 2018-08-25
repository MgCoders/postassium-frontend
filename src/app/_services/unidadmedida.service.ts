import { Injectable } from '@angular/core';
import { UnidadMedida } from '../_models/UnidadMedida';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * Created by pablo on 25/08/18.
 */

@Injectable()
export class UnidadMedidaService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<UnidadMedida[]> {
        return this.http.get<UnidadMedida[]>(`${environment.apiUrl}/unidadmedida/`);
    }

}
