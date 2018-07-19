import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaticConfigurationsComponent } from './add-static-configurations.component';

describe('AddStaticConfigurationsComponent', () => {
  let component: AddStaticConfigurationsComponent;
  let fixture: ComponentFixture<AddStaticConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaticConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaticConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
