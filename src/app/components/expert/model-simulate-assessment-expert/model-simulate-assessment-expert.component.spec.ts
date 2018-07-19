import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSimulateAssessmentExpertComponent } from './model-simulate-assessment-expert.component';

describe('ModelSimulateAssessmentExpertComponent', () => {
  let component: ModelSimulateAssessmentExpertComponent;
  let fixture: ComponentFixture<ModelSimulateAssessmentExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSimulateAssessmentExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSimulateAssessmentExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
