import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvafacturaSelectComponent } from './ivafactura-select.component';

describe('IvafacturaSelectComponent', () => {
  let component: IvafacturaSelectComponent;
  let fixture: ComponentFixture<IvafacturaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvafacturaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvafacturaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
