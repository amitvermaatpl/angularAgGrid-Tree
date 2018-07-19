import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelScheduleAssessmentComponent } from './model-schedule-assessment.component';

describe('ModelScheduleAssessmentComponent', () => {
  let component: ModelScheduleAssessmentComponent;
  let fixture: ComponentFixture<ModelScheduleAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelScheduleAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelScheduleAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
