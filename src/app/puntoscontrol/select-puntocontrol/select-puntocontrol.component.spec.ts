import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPuntocontrolComponent } from './select-puntocontrol.component';

describe('SelectPuntocontrolComponent', () => {
  let component: SelectPuntocontrolComponent;
  let fixture: ComponentFixture<SelectPuntocontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPuntocontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPuntocontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
