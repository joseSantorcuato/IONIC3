import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjpropertyComponent } from './ejproperty.component';

describe('EjpropertyComponent', () => {
  let component: EjpropertyComponent;
  let fixture: ComponentFixture<EjpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
