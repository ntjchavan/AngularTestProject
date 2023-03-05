import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutussub2Component } from './aboutussub2.component';

describe('Aboutussub2Component', () => {
  let component: Aboutussub2Component;
  let fixture: ComponentFixture<Aboutussub2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aboutussub2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aboutussub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
