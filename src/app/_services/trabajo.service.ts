/**
 * Created by msteglich on 2/5/18.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Proyecto } from '../_models/models';
import { Observable } from 'rxjs/Observable';
import { Trabajo } from '../_models/Trabajo';
import { RequestOptions, Request, ResponseContentType } from '@angular/http';
import { open } from 'inspector';

@Injectable()
export class TrabajoService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<Trabajo[]> {
        return this.http.get<Trabajo[]>(`${environment.apiUrl}/trabajos/`);
    }

    get(id: number): Observable<Trabajo> {
        return this.http.get<Trabajo>(`${environment.apiUrl}/trabajos/` + id);
    }

    getPDF(id: number): Observable<Blob> {
        return this.http
        .get(`${environment.apiUrl}/trabajos/PDF/` + id, {
          responseType: 'blob'
        });
    }

    getByEstado(estado: string): Observable<Trabajo[]> {
        return this.http.get<Trabajo[]>(`${environment.apiUrl}/trabajos/estado/` + estado);
    }

    getByEstados(estado: string): Observable<Trabajo[]> {
        return this.http.get<Trabajo[]>(`${environment.apiUrl}/trabajos/estados/` + estado);
    }

    getByCliente(idCliente: number): Observable<Trabajo[]> {
        return this.http.get<Trabajo[]>(`${environment.apiUrl}/trabajos/cliente/` + idCliente);
    }

    getByEquipo(idEquipo: number): Observable<Trabajo[]> {
        return this.http.get<Trabajo[]>(`${environment.apiUrl}/trabajos/equipo/` + idEquipo);
    }

    create(x: Trabajo): Observable<any> {
        return this.http.post(`${environment.apiUrl}/trabajos/`, x);
    }

    edit(x: Trabajo): Observable<any> {
        return this.http.put(`${environment.apiUrl}/trabajos/` + x.id, x);
    }

    countByCampo(campo: string, valor: string): Observable<number> {
        return this.http.get<number>(`${environment.apiUrl}/trabajos/countField/` + campo + '/' + valor);
    }

    countAll(): Observable<number> {
        return this.http.get<number>(`${environment.apiUrl}/trabajos/count/`);
    }
}
