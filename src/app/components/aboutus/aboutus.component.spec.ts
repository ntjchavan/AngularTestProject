import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from 'src/app/services/employee.service';
import { AboutusComponent } from './aboutus.component';
import { Aboutussub2Component } from '../aboutussub2/aboutussub2.component';

describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;
  let serviceSpy: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AboutusComponent,
        Aboutussub2Component
      ],
      providers: [
        { provide: EmployeeService, useValue: serviceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create1', () => {
    expect(component).toBeTruthy();
  });

  it('to be defined', () =>{
    var arr = [1, 2, 3, 4];
    expect(arr).toContain(2);
    expect([1, 2, 3, 4, 5]).toContain(3);
  })
});
