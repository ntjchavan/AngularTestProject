import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveaddComponent } from './reactiveadd.component';

describe('ReactiveaddComponent', () => {
  let component: ReactiveaddComponent;
  let fixture: ComponentFixture<ReactiveaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
