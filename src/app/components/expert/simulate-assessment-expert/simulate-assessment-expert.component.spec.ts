import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateAssessmentExpertComponent } from './simulate-assessment-expert.component';

describe('SimulateAssessmentExpertComponent', () => {
  let component: SimulateAssessmentExpertComponent;
  let fixture: ComponentFixture<SimulateAssessmentExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateAssessmentExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateAssessmentExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
