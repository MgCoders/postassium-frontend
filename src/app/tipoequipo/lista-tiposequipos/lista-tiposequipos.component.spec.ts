import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposEquiposComponent } from './lista-tiposequipos.component';

describe('ListaTiposEquiposComponent', () => {
  let component: ListaTiposEquiposComponent;
  let fixture: ComponentFixture<ListaTiposEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTiposEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
