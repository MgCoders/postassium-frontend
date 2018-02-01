import { Injectable } from '@angular/core';
import { Rubro } from '../_models/Rubro';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * Created by pablo on 01/02/18.
 */

@Injectable()
export class RubroService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<Rubro[]> {
        return this.http.get<Rubro[]>(`${environment.apiUrl}/rubros/`);
    }

    get(id: number): Observable<Rubro> {
        return this.http.get<Rubro>(`${environment.apiUrl}/rubros/` + id);
    }

    create(x: Rubro): Observable<any> {
        return this.http.post(`${environment.apiUrl}/rubros/`, x);
    }

    edit(x: Rubro): Observable<any> {
        return this.http.put(`${environment.apiUrl}/rubros/` + x.id, x);
    }
}
