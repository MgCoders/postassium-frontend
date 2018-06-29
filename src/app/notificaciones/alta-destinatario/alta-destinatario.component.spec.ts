import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaDestinatarioComponent } from './alta-destinatario.component';

describe('AltaDestinatarioComponent', () => {
  let component: AltaDestinatarioComponent;
  let fixture: ComponentFixture<AltaDestinatarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaDestinatarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaDestinatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
