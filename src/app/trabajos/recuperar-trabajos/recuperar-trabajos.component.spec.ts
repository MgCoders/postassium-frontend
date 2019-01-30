import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarTrabajosComponent } from './recuperar-trabajos.component';

describe('RecuperarTrabajosComponent', () => {
  let component: RecuperarTrabajosComponent;
  let fixture: ComponentFixture<RecuperarTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
