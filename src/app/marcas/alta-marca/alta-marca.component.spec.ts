import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMarcaComponent } from './alta-marca.component';

describe('AltaMarcaComponent', () => {
  let component: AltaMarcaComponent;
  let fixture: ComponentFixture<AltaMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
