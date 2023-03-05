import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutussub1Component } from './aboutussub1.component';

describe('Aboutussub1Component', () => {
  let component: Aboutussub1Component;
  let fixture: ComponentFixture<Aboutussub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aboutussub1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutussub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
