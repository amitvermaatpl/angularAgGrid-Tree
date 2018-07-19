import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssessmentComponent } from './request-assessment.component';

describe('RequestAssessmentComponent', () => {
  let component: RequestAssessmentComponent;
  let fixture: ComponentFixture<RequestAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
