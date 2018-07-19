import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAssessmentDataSelectionComponent } from './live-assessment-data-selection.component';

describe('LiveAssessmentDataSelectionComponent', () => {
  let component: LiveAssessmentDataSelectionComponent;
  let fixture: ComponentFixture<LiveAssessmentDataSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAssessmentDataSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAssessmentDataSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
