import { TestBed, inject } from '@angular/core/testing';

import { BankersService } from './bankers.service';

describe('BankersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankersService]
    });
  });

  it('should be created', inject([BankersService], (service: BankersService) => {
    expect(service).toBeTruthy();
  }));
});
