import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUnidadmedidaComponent } from './select-unidadmedida.component';

describe('SelectUnidadmedidaComponent', () => {
  let component: SelectUnidadmedidaComponent;
  let fixture: ComponentFixture<SelectUnidadmedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUnidadmedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUnidadmedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
