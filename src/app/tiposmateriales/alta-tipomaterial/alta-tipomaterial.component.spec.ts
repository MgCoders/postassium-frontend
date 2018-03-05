import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTipomaterialComponent } from './alta-tipomaterial.component';

describe('AltaTipomaterialComponent', () => {
  let component: AltaTipomaterialComponent;
  let fixture: ComponentFixture<AltaTipomaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTipomaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTipomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
