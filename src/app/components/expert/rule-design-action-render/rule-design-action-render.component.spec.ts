import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDesignActionRenderComponent } from './rule-design-action-render.component';

describe('RuleDesignActionRenderComponent', () => {
  let component: RuleDesignActionRenderComponent;
  let fixture: ComponentFixture<RuleDesignActionRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleDesignActionRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleDesignActionRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
