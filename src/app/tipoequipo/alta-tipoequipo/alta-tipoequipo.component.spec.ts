import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTipoEquipoComponent } from './alta-tipoequipo.component';

describe('AltaTipoEquipoComponent', () => {
  let component: AltaTipoEquipoComponent;
  let fixture: ComponentFixture<AltaTipoEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTipoEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTipoEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
