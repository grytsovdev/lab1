import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('рекурсія', () => {
    let x = 0;
    let y = 1;
    let y1 = service.getSeriesRecursive(x, 4);
    expect(y.toFixed(2)).toBe(y1.toFixed(2))
  })
});
