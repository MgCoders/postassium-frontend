import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cliente } from '../_models/Cliente';
import { environment } from '../../environments/environment';

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient) {}

    getAll(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${environment.apiUrl}/clientes/`);
    }

    get(id: number): Observable<Cliente> {
        return this.http.get<Cliente>(`${environment.apiUrl}/clientes/` + id);
    }

    getByNombreEmpresa(nombreEmpresa: string): Observable<Cliente> {
        return this.http.get<Cliente>(`${environment.apiUrl}/clientes/nombreEmpresa/` + nombreEmpresa);
    }

    getByRut(rut: string): Observable<Cliente> {
        return this.http.get<Cliente>(`${environment.apiUrl}/clientes/rut/` + rut);
    }

    create(x: Cliente): Observable<any> {
        return this.http.post(`${environment.apiUrl}/clientes/`, x);
    }

    edit(x: Cliente): Observable<any> {
        return this.http.put(`${environment.apiUrl}/clientes/` + x.id, x);
    }

    getAll_x_Filtro(filtro: string): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${environment.apiUrl}/clientes/autocomplete/` + encodeURIComponent(filtro));
    }
}
