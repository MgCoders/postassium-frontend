import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoFacturaViewComponent } from './trabajo-factura-view.component';

describe('TrabajoFacturaViewComponent', () => {
  let component: TrabajoFacturaViewComponent;
  let fixture: ComponentFixture<TrabajoFacturaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoFacturaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoFacturaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
