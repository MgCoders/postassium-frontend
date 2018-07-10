import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Factura } from '../_models/models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FacturaService {

    constructor(public http: HttpClient) { }

    getByTrabajo(idTrabajo: number): Observable<Factura[]> {
        return this.http.get<Factura[]>(`${environment.apiUrl}/facturas/trabajo/` + idTrabajo);
    }

    create(x: Factura): Observable<any> {
        return this.http.post(`${environment.apiUrl}/facturas/`, x);
    }

    edit(x: Factura): Observable<any> {
        return this.http.put(`${environment.apiUrl}/facturas/` + x.id, x);
    }
}
