import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaterialesLazyComponent } from './lista-materiales-lazy.component';

describe('ListaMaterialesLazyComponent', () => {
  let component: ListaMaterialesLazyComponent;
  let fixture: ComponentFixture<ListaMaterialesLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaterialesLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaterialesLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
