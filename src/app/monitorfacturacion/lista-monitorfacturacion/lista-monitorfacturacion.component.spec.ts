import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMonitorFacturacionComponent } from './lista-monitorfacturacion.component';

describe('ListaMonitorFacturacionComponent', () => {
  let component: ListaMonitorFacturacionComponent;
  let fixture: ComponentFixture<ListaMonitorFacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMonitorFacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMonitorFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
