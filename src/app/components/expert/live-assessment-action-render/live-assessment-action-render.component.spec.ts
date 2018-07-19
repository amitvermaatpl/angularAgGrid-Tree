import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAssessmentActionRenderComponent } from './live-assessment-action-render.component';

describe('LiveAssessmentActionRenderComponent', () => {
  let component: LiveAssessmentActionRenderComponent;
  let fixture: ComponentFixture<LiveAssessmentActionRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveAssessmentActionRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveAssessmentActionRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
