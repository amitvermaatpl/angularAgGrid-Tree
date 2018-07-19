import { TestBed, inject } from '@angular/core/testing';

import { PortfolioTreeService } from './portfolio-tree.service';

describe('PortfolioTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioTreeService]
    });
  });

  it('should be created', inject([PortfolioTreeService], (service: PortfolioTreeService) => {
    expect(service).toBeTruthy();
  }));
});
