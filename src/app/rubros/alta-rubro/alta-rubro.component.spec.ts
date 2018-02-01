import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRubroComponent } from './alta-rubro.component';

describe('AltaRubroComponent', () => {
  let component: AltaRubroComponent;
  let fixture: ComponentFixture<AltaRubroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaRubroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
