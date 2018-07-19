import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTreeComponent } from './portfolio-tree.component';

describe('PortfolioTreeComponent', () => {
  let component: PortfolioTreeComponent;
  let fixture: ComponentFixture<PortfolioTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
