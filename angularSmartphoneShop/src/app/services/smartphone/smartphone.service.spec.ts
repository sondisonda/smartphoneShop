/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SmartphoneService } from './smartphone.service';

describe('Service: Smartphone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartphoneService]
    });
  });

  it('should ...', inject([SmartphoneService], (service: SmartphoneService) => {
    expect(service).toBeTruthy();
  }));
});
