import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssessmentPlacedComponent } from './request-assessment-placed.component';

describe('RequestAssessmentPlacedComponent', () => {
  let component: RequestAssessmentPlacedComponent;
  let fixture: ComponentFixture<RequestAssessmentPlacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAssessmentPlacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAssessmentPlacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
