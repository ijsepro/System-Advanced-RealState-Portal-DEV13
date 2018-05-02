import { TestBed, inject } from '@angular/core/testing';

import { ConstructorProfileService } from './constructor-profile.service';

describe('ConstructorProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstructorProfileService]
    });
  });

  it('should be created', inject([ConstructorProfileService], (service: ConstructorProfileService) => {
    expect(service).toBeTruthy();
  }));
});
