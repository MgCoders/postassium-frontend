import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRegistroComponent } from './alta-registro.component';

describe('AltaRegistroComponent', () => {
  let component: AltaRegistroComponent;
  let fixture: ComponentFixture<AltaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
