import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Cargo } from '../_models/models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CargoService {

  constructor(public http: HttpClient) { }

  getAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${environment.apiUrl}/cargos/`);
  }

  get(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${environment.apiUrl}/cargos/` + id);
  }

  create(cargo: Cargo): Observable<any> {
    return this.http.post(`${environment.apiUrl}/cargos/`, cargo);
  }

  edit(cargo: Cargo): Observable<any> {
        return this.http.put(`${environment.apiUrl}/cargos/` + cargo.id, cargo);
  }
}
