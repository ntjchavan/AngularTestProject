import { TestBed } from '@angular/core/testing';

import { SharedatataService } from './sharedatata.service';

describe('SharedatataService', () => {
  let service: SharedatataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedatataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
