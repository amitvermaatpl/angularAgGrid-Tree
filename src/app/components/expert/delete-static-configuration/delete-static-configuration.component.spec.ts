import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStaticConfigurationComponent } from './delete-static-configuration.component';

describe('DeleteStaticConfigurationComponent', () => {
  let component: DeleteStaticConfigurationComponent;
  let fixture: ComponentFixture<DeleteStaticConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteStaticConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStaticConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
