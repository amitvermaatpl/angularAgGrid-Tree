import { TestBed, inject } from '@angular/core/testing';

import { RuledesignService } from './ruledesign.service';
import { RuleStepService } from './rulestep.service';

describe('RuleStepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuleStepService]
    });
  });

  it('should be created', inject([RuleStepService], (service: RuleStepService) => {
    expect(service).toBeTruthy();
  }));
});
