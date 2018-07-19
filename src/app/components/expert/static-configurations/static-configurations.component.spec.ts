import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticConfigurationsComponent } from './static-configurations.component';

describe('StaticConfigurationsComponent', () => {
  let component: StaticConfigurationsComponent;
  let fixture: ComponentFixture<StaticConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
