import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Material } from '../_models/Material';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TipoMaterial } from '../_models/TipoMaterial';
/**
 * Created by pablo on 04/03/18.
 */
@Injectable()
export class MaterialService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<Material[]> {
        return this.http.get<Material[]>(`${environment.apiUrl}/materiales/`);
    }

    getAll_x_Filtro(filtro: string): Observable<Material[]> {
        return this.http.get<Material[]>(`${environment.apiUrl}/materiales/autocomplete/` + encodeURIComponent(filtro));
    }

    create(x: Material): Observable<any> {
        return this.http.post(`${environment.apiUrl}/materiales/`, x);
    }

    edit(x: Material): Observable<any> {
        return this.http.put(`${environment.apiUrl}/materiales/` + x.id, x);
    }

    getPage(limit: number, offset: number, filter: string): Observable<Material[]> {
        return this.http.get<Material[]>(`${environment.apiUrl}/materiales`, {
            params: new HttpParams()
                .set('limit', limit.toString())
                .set('offset', offset.toString())
                .set('filter', filter)
        });
    }

    count(): Observable<number> {
        return this.http.get<number>(`${environment.apiUrl}/materiales/count`);
    }

    getByTipoMaterial(tm: TipoMaterial): Observable<Material[]> {
        return this.http.get<Material[]>(`${environment.apiUrl}/materiales/tipomaterial/` + tm.id);
    }

}
