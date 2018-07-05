import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoFacturaNuevaComponent } from './trabajo-factura-nueva.component';

describe('TrabajoFacturaNuevaComponent', () => {
  let component: TrabajoFacturaNuevaComponent;
  let fixture: ComponentFixture<TrabajoFacturaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoFacturaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoFacturaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
