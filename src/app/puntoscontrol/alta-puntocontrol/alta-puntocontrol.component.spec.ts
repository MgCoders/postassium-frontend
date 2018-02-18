import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPuntocontrolComponent } from './alta-puntocontrol.component';

describe('AltaPuntocontrolComponent', () => {
  let component: AltaPuntocontrolComponent;
  let fixture: ComponentFixture<AltaPuntocontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPuntocontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPuntocontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
