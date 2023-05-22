import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Cума ряду', () => {
    let x = 0;
    let y = 1;
    let y1 = service.getSeries(x);
    expect(y.toFixed(2)).toBe(y1.toFixed(2))
  })
});
