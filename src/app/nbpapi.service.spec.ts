import { TestBed } from '@angular/core/testing';

import { NbpapiService } from './nbpapi.service';

describe('NbpapiService', () => {
  let service: NbpapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbpapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
