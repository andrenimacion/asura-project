import { TestBed } from '@angular/core/testing';

import { GetDataThinksService } from './get-data-thinks.service';

describe('GetDataThinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDataThinksService = TestBed.get(GetDataThinksService);
    expect(service).toBeTruthy();
  });
});
