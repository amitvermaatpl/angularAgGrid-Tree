import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPastAssessmentComponent } from './model-past-assessment.component';

describe('ModelPastAssessmentComponent', () => {
  let component: ModelPastAssessmentComponent;
  let fixture: ComponentFixture<ModelPastAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPastAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPastAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
