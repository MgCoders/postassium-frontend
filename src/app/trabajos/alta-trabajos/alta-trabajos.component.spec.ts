import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTrabajosComponent } from './alta-trabajos.component';

describe('AltaTrabajosComponent', () => {
  let component: AltaTrabajosComponent;
  let fixture: ComponentFixture<AltaTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
