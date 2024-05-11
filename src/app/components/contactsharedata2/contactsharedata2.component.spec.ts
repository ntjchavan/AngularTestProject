import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactsharedata2Component } from './contactsharedata2.component';

describe('Contactsharedata2Component', () => {
  let component: Contactsharedata2Component;
  let fixture: ComponentFixture<Contactsharedata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contactsharedata2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contactsharedata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
