import { TestBed, inject } from '@angular/core/testing';

import { LandProviderService } from './land-provider.service';

describe('LandProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandProviderService]
    });
  });

  it('should be created', inject([LandProviderService], (service: LandProviderService) => {
    expect(service).toBeTruthy();
  }));
});
