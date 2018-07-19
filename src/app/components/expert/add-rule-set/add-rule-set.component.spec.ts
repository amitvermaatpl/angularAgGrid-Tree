import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRuleSetComponent } from './add-rule-set.component';

describe('AddRuleSetComponent', () => {
  let component: AddRuleSetComponent;
  let fixture: ComponentFixture<AddRuleSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRuleSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRuleSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
