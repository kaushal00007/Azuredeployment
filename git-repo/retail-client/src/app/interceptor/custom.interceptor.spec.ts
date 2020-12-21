import { TestBed, inject } from '@angular/core/testing';

import { CustomInterceptor } from './custom.interceptor';

describe('CustomInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomInterceptor
      ]
  }));

  it(
    'should be initialized',
    inject([CustomInterceptor], (customInterceptor: CustomInterceptor) => {
      expect(customInterceptor).toBeTruthy();
    })
  );

  // it('should be created', inject([CustomInterceptor], (customInterceptor: CustomInterceptor) => {
  //   expect(customInterceptor).toBeTruthy();
  // });
});
