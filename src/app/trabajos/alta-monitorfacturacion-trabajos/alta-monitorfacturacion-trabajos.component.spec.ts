import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMonitorFacturacionTrabajosComponent } from './alta-monitorfacturacion-trabajos.component';

describe('AltaMonitorFacturacionTrabajosComponent', () => {
  let component: AltaMonitorFacturacionTrabajosComponent;
  let fixture: ComponentFixture<AltaMonitorFacturacionTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMonitorFacturacionTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMonitorFacturacionTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
