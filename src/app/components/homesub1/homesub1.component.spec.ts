import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesub1Component } from './homesub1.component';

describe('Homesub1Component', () => {
  let component: Homesub1Component;
  let fixture: ComponentFixture<Homesub1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homesub1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homesub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
