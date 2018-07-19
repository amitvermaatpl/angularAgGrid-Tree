import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveStaticConfigurationsComponent } from './approve-static-configurations.component';

describe('ApproveStaticConfigurationsComponent', () => {
  let component: ApproveStaticConfigurationsComponent;
  let fixture: ComponentFixture<ApproveStaticConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveStaticConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveStaticConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
