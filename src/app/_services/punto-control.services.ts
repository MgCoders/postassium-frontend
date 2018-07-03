import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PuntoControl } from '../_models/PuntoControl';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class PuntoControlService {

    constructor(public http: HttpClient) { }

    getByTrabajo(idTrabajo: number): Observable<PuntoControl[]> {
        return this.http.get<PuntoControl[]>(`${environment.apiUrl}/puntoscontrol/` + idTrabajo);
    }

    create(x: PuntoControl): Observable<any> {
        return this.http.post(`${environment.apiUrl}/puntoscontrol/1`, x);
    }

    edit(x: PuntoControl): Observable<any> {
        return this.http.put(`${environment.apiUrl}/puntoscontrol/` + x.id, x);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/puntoscontrol/` + id);
    }
}