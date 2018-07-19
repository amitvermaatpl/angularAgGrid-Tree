import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAssessmentComponent } from './live-assessment.component';

describe('LiveAssessmentComponent', () => {
  let component: LiveAssessmentComponent;
  let fixture: ComponentFixture<LiveAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
