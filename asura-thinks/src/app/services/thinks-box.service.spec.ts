import { TestBed } from '@angular/core/testing';

import { ThinksBoxService } from './thinks-box.service';

describe('ThinksBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThinksBoxService = TestBed.get(ThinksBoxService);
    expect(service).toBeTruthy();
  });
});
