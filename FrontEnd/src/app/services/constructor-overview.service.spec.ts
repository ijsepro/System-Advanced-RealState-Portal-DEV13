import { TestBed, inject } from '@angular/core/testing';

import { ConstructorOverviewService } from './constructor-overview.service';

describe('ConstructorOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstructorOverviewService]
    });
  });

  it('should be created', inject([ConstructorOverviewService], (service: ConstructorOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
