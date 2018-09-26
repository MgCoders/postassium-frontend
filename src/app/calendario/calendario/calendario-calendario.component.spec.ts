import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CalendarioCalendarioComponent} from "./calendario-calendario.component";

describe('CalendarioCalendarioComponent', () => {
  let component: CalendarioCalendarioComponent;
  let fixture: ComponentFixture<CalendarioCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
