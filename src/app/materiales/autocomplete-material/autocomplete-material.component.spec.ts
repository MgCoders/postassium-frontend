import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMaterialComponent } from './autocomplete-material.component';

describe('AutocompleteMaterialComponent', () => {
  let component: AutocompleteMaterialComponent;
  let fixture: ComponentFixture<AutocompleteMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
