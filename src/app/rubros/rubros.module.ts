
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RubrosRoutingModule } from './rubros-routing.module';
import {
    MatButtonModule,
    MatDialogModule, MatIconModule, MatInputModule, MatSelectModule, MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import { SelectRubroComponent } from './select-rubro/select-rubro.component';
import { ListaRubrosComponent } from './lista-rubros/lista-rubros.component';
import { RubrosComponent } from './rubros.component';
import { AltaRubroComponent } from './alta-rubro/alta-rubro.component';
import { RubroService } from '../_services/rubros.service';
import { AlertService } from '../_services/alert.service';
import { LayoutService } from '../layout/layout.service';
/**
 * Created by pablo on 01/02/18.
 */

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RubrosRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule
    ],
    exports: [SelectRubroComponent],
    declarations: [RubrosComponent, ListaRubrosComponent, AltaRubroComponent, SelectRubroComponent],
    providers: [RubroService, AlertService, LayoutService],
    entryComponents: [AltaRubroComponent]
})

export class RubrosModule { }
