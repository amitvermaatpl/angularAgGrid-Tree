import { TestBed, inject } from '@angular/core/testing';

import { TreePortfolioService } from './tree-portfolio.service';

describe('TreePortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreePortfolioService]
    });
  });

  it('should be created', inject([TreePortfolioService], (service: TreePortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
