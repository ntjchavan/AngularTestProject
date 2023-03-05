import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeresolverComponent } from './employeeresolver.component';

describe('EmployeeresolverComponent', () => {
  let component: EmployeeresolverComponent;
  let fixture: ComponentFixture<EmployeeresolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeresolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeresolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
