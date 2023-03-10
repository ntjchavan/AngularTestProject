import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactsharedata1Component } from './contactsharedata1.component';

describe('Contactsharedata1Component', () => {
  let component: Contactsharedata1Component;
  let fixture: ComponentFixture<Contactsharedata1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contactsharedata1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactsharedata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
