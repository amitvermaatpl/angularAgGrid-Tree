import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticConfigActionRenderComponent } from './static-config-action-render.component';

describe('StaticConfigActionRenderComponent', () => {
  let component: StaticConfigActionRenderComponent;
  let fixture: ComponentFixture<StaticConfigActionRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticConfigActionRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticConfigActionRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
