import { TestBed, inject } from '@angular/core/testing';

import { ClinicService } from './clinic.service';

describe('ClinicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicService]
    });
  });

  it('should ...', inject([ClinicService], (service: ClinicService) => {
    expect(service).toBeTruthy();
  }));
});
