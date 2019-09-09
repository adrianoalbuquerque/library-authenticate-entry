import { TestBed } from '@angular/core/testing';

import { MscInputVService } from './msc-input-v.service';

describe('MscInputVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MscInputVService = TestBed.get(MscInputVService);
    expect(service).toBeTruthy();
  });
});
