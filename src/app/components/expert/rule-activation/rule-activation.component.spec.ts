import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleActivationComponent } from './rule-activation.component';

describe('RuleActivationComponent', () => {
  let component: RuleActivationComponent;
  let fixture: ComponentFixture<RuleActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
