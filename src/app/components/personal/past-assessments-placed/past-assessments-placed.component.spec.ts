import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastAssessmentsPlacedComponent } from './past-assessments-placed.component';

describe('PastAssessmentsPlacedComponent', () => {
  let component: PastAssessmentsPlacedComponent;
  let fixture: ComponentFixture<PastAssessmentsPlacedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastAssessmentsPlacedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastAssessmentsPlacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
