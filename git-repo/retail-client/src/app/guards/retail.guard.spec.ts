import { TestBed, async, inject } from '@angular/core/testing';

import { RetailGuard } from './retail.guard';

describe('RetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetailGuard]
    });
  });

  it('should ...', inject([RetailGuard], (guard: RetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
