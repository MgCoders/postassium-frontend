import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {VerificarPuntocontrolComponent} from './verificar-puntocontrol.component';

describe('VerificarPuntocontrolComponent', () => {
  let component: VerificarPuntocontrolComponent;
  let fixture: ComponentFixture<VerificarPuntocontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarPuntocontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarPuntocontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
