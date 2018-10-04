import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMarcaComponent } from './autocomplete-marca.component';

describe('AutocompleteMarcaComponent', () => {
  let component: AutocompleteMarcaComponent;
  let fixture: ComponentFixture<AutocompleteMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
