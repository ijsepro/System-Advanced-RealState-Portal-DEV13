import { TestBed, inject } from '@angular/core/testing';

import { ForgetPasswordServiceService } from './forget-password-service.service';

describe('ForgetPasswordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgetPasswordServiceService]
    });
  });

  it('should be created', inject([ForgetPasswordServiceService], (service: ForgetPasswordServiceService) => {
    expect(service).toBeTruthy();
  }));
});
