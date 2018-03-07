import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTareamaterialComponent } from './alta-tareamaterial.component';

describe('AltaTareamaterialComponent', () => {
  let component: AltaTareamaterialComponent;
  let fixture: ComponentFixture<AltaTareamaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTareamaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTareamaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
