import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStaticConfigurationsComponent } from './edit-static-configurations.component';

describe('EditStaticConfigurationsComponent', () => {
  let component: EditStaticConfigurationsComponent;
  let fixture: ComponentFixture<EditStaticConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStaticConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStaticConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
