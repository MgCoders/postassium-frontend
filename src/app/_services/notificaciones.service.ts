import { Injectable } from '@angular/core';
import { NotificacionDestinatario } from '../_models/NotificacionDestinatario';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * Created by pablo on 28/06/18.
 */

@Injectable()
export class NotificacionesService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<NotificacionDestinatario[]> {
        return this.http.get<NotificacionDestinatario[]>(`${environment.apiUrl}/notificaciones/`);
    }

    create(x: NotificacionDestinatario): Observable<any> {
        return this.http.post(`${environment.apiUrl}/notificaciones/`, x);
    }

    edit(x: NotificacionDestinatario): Observable<any> {
        return this.http.put(`${environment.apiUrl}/notificaciones/` + x.id, x);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/notificaciones/` + id);
    }


}
