import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrabajosComponent } from './detalle-trabajos.component';

describe('ListaTareasComponent', () => {
  let component: DetalleTrabajosComponent;
  let fixture: ComponentFixture<DetalleTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
