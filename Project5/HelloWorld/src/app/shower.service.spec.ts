import { TestBed } from '@angular/core/testing';

import { ShowerService } from './shower.service';

describe('ShowerService', () => {
  let service: ShowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
