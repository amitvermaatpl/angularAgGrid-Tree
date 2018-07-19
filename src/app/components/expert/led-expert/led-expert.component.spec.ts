import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedExpertComponent } from './led-expert.component';

describe('LedExpertComponent', () => {
  let component: LedExpertComponent;
  let fixture: ComponentFixture<LedExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
