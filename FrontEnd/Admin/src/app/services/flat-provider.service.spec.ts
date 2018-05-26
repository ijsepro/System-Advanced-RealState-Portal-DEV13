import { TestBed, inject } from '@angular/core/testing';

import { FlatProviderService } from './flat-provider.service';

describe('FlatProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlatProviderService]
    });
  });

  it('should be created', inject([FlatProviderService], (service: FlatProviderService) => {
    expect(service).toBeTruthy();
  }));
});
