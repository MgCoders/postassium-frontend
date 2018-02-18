import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMonitorFacturacionComponent } from './alta-monitorfacturacion.component';

describe('AltaMonitorFacturacionComponent', () => {
  let component: AltaMonitorFacturacionComponent;
  let fixture: ComponentFixture<AltaMonitorFacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMonitorFacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMonitorFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
