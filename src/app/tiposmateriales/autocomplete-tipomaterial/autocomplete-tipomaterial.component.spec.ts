import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteTipomaterialComponent } from './autocomplete-tipomaterial.component';

describe('AutocompleteTipomaterialComponent', () => {
  let component: AutocompleteTipomaterialComponent;
  let fixture: ComponentFixture<AutocompleteTipomaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteTipomaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteTipomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
