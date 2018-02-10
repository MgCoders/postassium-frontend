import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPuntoscontrolComponent } from './lista-puntoscontrol.component';

describe('ListaPuntoscontrolComponent', () => {
  let component: ListaPuntoscontrolComponent;
  let fixture: ComponentFixture<ListaPuntoscontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPuntoscontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPuntoscontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
