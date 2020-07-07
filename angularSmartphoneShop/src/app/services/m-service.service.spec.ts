/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MServiceService } from './m-service.service';

describe('Service: MService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MServiceService]
    });
  });

  it('should ...', inject([MServiceService], (service: MServiceService) => {
    expect(service).toBeTruthy();
  }));
});
