import {TestBed} from '@angular/core/testing';

import {GeneratingService} from './generating.service';

describe('GeneratingService', () => {
  let service: GeneratingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
