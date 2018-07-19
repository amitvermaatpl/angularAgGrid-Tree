import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRuleStepComponent } from './edit-rule-step.component';

describe('EditRuleStepComponent', () => {
  let component: EditRuleStepComponent;
  let fixture: ComponentFixture<EditRuleStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRuleStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRuleStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
