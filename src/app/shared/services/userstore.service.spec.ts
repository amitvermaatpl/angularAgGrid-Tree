import { TestBed, inject } from '@angular/core/testing';

import { UserstoreService } from './userstore.service';

describe('UserstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserstoreService]
    });
  });

  it('should be created', inject([UserstoreService], (service: UserstoreService) => {
    expect(service).toBeTruthy();
  }));
});
