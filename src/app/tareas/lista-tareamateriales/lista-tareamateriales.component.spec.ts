import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareamaterialesComponent } from './lista-tareamateriales.component';

describe('ListaTareamaterialesComponent', () => {
  let component: ListaTareamaterialesComponent;
  let fixture: ComponentFixture<ListaTareamaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTareamaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTareamaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
