import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorFacturacionTrabajosComponent } from './monitorfacturacion-trabajos.component';

describe('MonitorFacturacionTrabajosComponent', () => {
  let component: MonitorFacturacionTrabajosComponent;
  let fixture: ComponentFixture<MonitorFacturacionTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorFacturacionTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorFacturacionTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
