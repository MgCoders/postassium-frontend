import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMarcaComponent } from './select-marcaequipo.component';

describe('SelectMarcaComponent', () => {
  let component: SelectMarcaComponent;
  let fixture: ComponentFixture<SelectMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
