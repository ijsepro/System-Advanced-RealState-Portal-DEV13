import { TestBed, inject } from '@angular/core/testing';

import { PostWorkService } from './post-work.service';

describe('PostWorkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostWorkService]
    });
  });

  it('should be created', inject([PostWorkService], (service: PostWorkService) => {
    expect(service).toBeTruthy();
  }));
});
