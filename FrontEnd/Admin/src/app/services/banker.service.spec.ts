import { TestBed, inject } from '@angular/core/testing';

import { BankerService } from './banker.service';

describe('BankerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankerService]
    });
  });

  it('should be created', inject([BankerService], (service: BankerService) => {
    expect(service).toBeTruthy();
  }));
});
