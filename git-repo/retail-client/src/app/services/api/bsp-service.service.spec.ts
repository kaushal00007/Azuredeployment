/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BspServiceService } from './bsp-service.service';

describe('Service: BspService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BspServiceService]
    });
  });

  it('should ...', inject([BspServiceService], (service: BspServiceService) => {
    expect(service).toBeTruthy();
  }));
});
