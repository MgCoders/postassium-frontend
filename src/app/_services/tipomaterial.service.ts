import { Injectable } from '@angular/core';
import { TipoMaterial } from '../_models/TipoMaterial';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
/**
 * Created by pablo on 04/03/18.
 */
@Injectable()
export class TipoMaterialService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<TipoMaterial[]> {
        return this.http.get<TipoMaterial[]>(`${environment.apiUrl}/tiposmateriales/`);
    }

    getAll_x_Filtro(filtro: string): Observable<TipoMaterial[]> {
        return this.http.get<TipoMaterial[]>(`${environment.apiUrl}/tiposmateriales/autocomplete/` + encodeURIComponent(filtro));
    }

    create(x: TipoMaterial): Observable<any> {
        return this.http.post(`${environment.apiUrl}/tiposmateriales/`, x);
    }

    edit(x: TipoMaterial): Observable<any> {
        return this.http.put(`${environment.apiUrl}/tiposmateriales/` + x.id, x);
    }

}
