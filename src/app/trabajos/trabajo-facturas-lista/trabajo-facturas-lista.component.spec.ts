import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoFacturasListaComponent } from './trabajo-facturas-lista.component';

describe('TrabajoFacturasListaComponent', () => {
  let component: TrabajoFacturasListaComponent;
  let fixture: ComponentFixture<TrabajoFacturasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoFacturasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoFacturasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
