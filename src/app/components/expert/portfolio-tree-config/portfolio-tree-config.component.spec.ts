import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTreeConfigComponent } from './portfolio-tree-config.component';

describe('PortfolioTreeConfigComponent', () => {
  let component: PortfolioTreeConfigComponent;
  let fixture: ComponentFixture<PortfolioTreeConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTreeConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTreeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
