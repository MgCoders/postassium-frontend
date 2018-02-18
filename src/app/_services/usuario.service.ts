
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../_models/Usuario';

@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${environment.apiUrl}/usuarios/`);
    }

    get(id: number): Observable<Usuario> {
        return this.http.get<Usuario>(`${environment.apiUrl}/usuarios/` + id);
    }

    create(x: Usuario): Observable<any> {
        return this.http.post(`${environment.apiUrl}/usuarios/`, x);
    }

    edit(x: Usuario): Observable<any> {
        return this.http.put(`${environment.apiUrl}/usuarios/` + x.id, x);
    }
}
