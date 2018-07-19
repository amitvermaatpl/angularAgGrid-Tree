import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAssessmentsComponent } from './schedule-assessments.component';

describe('ScheduleAssessmentsComponent', () => {
  let component: ScheduleAssessmentsComponent;
  let fixture: ComponentFixture<ScheduleAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
