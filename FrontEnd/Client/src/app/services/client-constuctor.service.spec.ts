import { TestBed, inject } from '@angular/core/testing';

import { ClientConstuctorService } from './client-constuctor.service';

describe('ClientConstuctorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientConstuctorService]
    });
  });

  it('should be created', inject([ClientConstuctorService], (service: ClientConstuctorService) => {
    expect(service).toBeTruthy();
  }));
});
