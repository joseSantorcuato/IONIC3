import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayobjetosComponent } from './arrayobjetos.component';

describe('ArrayobjetosComponent', () => {
  let component: ArrayobjetosComponent;
  let fixture: ComponentFixture<ArrayobjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayobjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayobjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
