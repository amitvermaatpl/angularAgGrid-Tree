import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSimulateAssessmentComponent } from './model-simulate-assessment.component';

describe('ModelSimulateAssessmentComponent', () => {
  let component: ModelSimulateAssessmentComponent;
  let fixture: ComponentFixture<ModelSimulateAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSimulateAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSimulateAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
