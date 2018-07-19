import { TestBed, inject } from '@angular/core/testing';

import { RuledesignService } from './ruledesign.service';

describe('RuledesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuledesignService]
    });
  });

  it('should be created', inject([RuledesignService], (service: RuledesignService) => {
    expect(service).toBeTruthy();
  }));
});
