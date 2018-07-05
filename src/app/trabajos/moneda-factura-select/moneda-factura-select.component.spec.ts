import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaFacturaSelectComponent } from './moneda-factura-select.component';

describe('MonedaFacturaSelectComponent', () => {
  let component: MonedaFacturaSelectComponent;
  let fixture: ComponentFixture<MonedaFacturaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedaFacturaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaFacturaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
