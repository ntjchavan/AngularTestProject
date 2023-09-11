import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervieweditComponent } from './interviewedit.component';

describe('IntervieweditComponent', () => {
  let component: IntervieweditComponent;
  let fixture: ComponentFixture<IntervieweditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervieweditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervieweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
