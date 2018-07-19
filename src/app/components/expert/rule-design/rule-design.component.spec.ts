import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDesignComponent } from './rule-design.component';

describe('RuleDesignComponent', () => {
  let component: RuleDesignComponent;
  let fixture: ComponentFixture<RuleDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
