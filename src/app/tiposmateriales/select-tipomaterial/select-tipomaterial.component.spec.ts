import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTipomaterialComponent } from './select-tipomaterial.component';

describe('SelectTipomaterialComponent', () => {
  let component: SelectTipomaterialComponent;
  let fixture: ComponentFixture<SelectTipomaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTipomaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTipomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
