import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjdirngforComponent } from './ejdirngfor.component';

describe('EjdirngforComponent', () => {
  let component: EjdirngforComponent;
  let fixture: ComponentFixture<EjdirngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjdirngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjdirngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
