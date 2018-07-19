import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateAssessmentComponent } from './simulate-assessment.component';

describe('SimulateAssessmentComponent', () => {
  let component: SimulateAssessmentComponent;
  let fixture: ComponentFixture<SimulateAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulateAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
