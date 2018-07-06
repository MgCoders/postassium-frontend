import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTipoEquipoComponent } from './select-tipoequipo.component';

describe('SelectTipoEquipoComponent', () => {
  let component: SelectTipoEquipoComponent;
  let fixture: ComponentFixture<SelectTipoEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTipoEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTipoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
