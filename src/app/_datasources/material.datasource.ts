import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Material } from '../_models/Material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MaterialService } from '../_services/material.service';
import { Observable } from 'rxjs/Observable';
/**
 * Created by pablo on 25/09/18.
 */

export class MaterialDataSource implements DataSource<Material> {

    private materialSubject = new BehaviorSubject<Material[]>([]);

    constructor(private materialService: MaterialService) {
    }

    loadMateriales(pageIndex: number,
                   pageSize: number) {

        this.materialService.getPage( (pageIndex - 1) * pageSize, pageSize ).subscribe(
            (data) => {
                this.materialSubject.next(data);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    connect(collectionViewer: CollectionViewer): Observable<Material[]> {
        console.log('connecting MaterialDataSource');
        return this.materialSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.materialSubject.complete();
    }
}
