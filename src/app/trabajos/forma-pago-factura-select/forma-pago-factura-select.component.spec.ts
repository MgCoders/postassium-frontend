import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaPagoFacturaSelectComponent } from './forma-pago-factura-select.component';

describe('FormaPagoFacturaSelectComponent', () => {
  let component: FormaPagoFacturaSelectComponent;
  let fixture: ComponentFixture<FormaPagoFacturaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaPagoFacturaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaPagoFacturaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
