import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectStaticConfigurationComponent } from './reject-static-configuration.component';

describe('RejectStaticConfigurationComponent', () => {
  let component: RejectStaticConfigurationComponent;
  let fixture: ComponentFixture<RejectStaticConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectStaticConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectStaticConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
