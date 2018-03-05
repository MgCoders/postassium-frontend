import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiposmaterialesComponent } from './lista-tiposmateriales.component';

describe('ListaTiposmaterialesComponent', () => {
  let component: ListaTiposmaterialesComponent;
  let fixture: ComponentFixture<ListaTiposmaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTiposmaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiposmaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
