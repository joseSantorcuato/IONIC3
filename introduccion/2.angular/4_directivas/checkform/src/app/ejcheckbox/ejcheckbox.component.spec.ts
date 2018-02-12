import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjcheckboxComponent } from './ejcheckbox.component';

describe('EjcheckboxComponent', () => {
  let component: EjcheckboxComponent;
  let fixture: ComponentFixture<EjcheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
