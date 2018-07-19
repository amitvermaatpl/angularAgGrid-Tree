import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSimulationsComponent } from './past-simulations.component';

describe('PastSimulationsComponent', () => {
  let component: PastSimulationsComponent;
  let fixture: ComponentFixture<PastSimulationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastSimulationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSimulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
