import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPastSimulationComponent } from './model-past-simulation.component';

describe('ModelPastSimulationComponent', () => {
  let component: ModelPastSimulationComponent;
  let fixture: ComponentFixture<ModelPastSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPastSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelPastSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
