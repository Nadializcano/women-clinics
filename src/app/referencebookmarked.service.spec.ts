import { TestBed, inject } from '@angular/core/testing';

import { ReferencebookmarkedService } from './referencebookmarked.service';

describe('ReferencebookmarkedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferencebookmarkedService]
    });
  });

  it('should be created', inject([ReferencebookmarkedService], (service: ReferencebookmarkedService) => {
    expect(service).toBeTruthy();
  }));
});
