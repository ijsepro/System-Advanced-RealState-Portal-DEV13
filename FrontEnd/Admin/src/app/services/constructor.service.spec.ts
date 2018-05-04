import { TestBed, inject } from '@angular/core/testing';

import { ConstructorService } from './constructor.service';

describe('ConstructorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstructorService]
    });
  });

  it('should be created', inject([ConstructorService], (service: ConstructorService) => {
    expect(service).toBeTruthy();
  }));
});
