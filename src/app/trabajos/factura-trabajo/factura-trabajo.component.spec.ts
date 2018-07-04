import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaTrabajoComponent } from './factura-trabajo.component';

describe('FacturaTrabajoComponent', () => {
  let component: FacturaTrabajoComponent;
  let fixture: ComponentFixture<FacturaTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
