/**
 * Created by pablo on 25/08/18.
 */
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { NucleoMaterial } from '../_models/NucleoMaterial';
/**
 * Created by pablo on 25/08/18.
 */

@Injectable()
export class NucleoMaterialService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<NucleoMaterial[]> {
        return this.http.get<NucleoMaterial[]>(`${environment.apiUrl}/nucleomaterial/`);
    }

    getAllByTipoMaterial(id: number): Observable<NucleoMaterial[]> {
        return this.http.get<NucleoMaterial[]>(`${environment.apiUrl}/nucleomaterial/tipomaterial/` + id);
    }

}
