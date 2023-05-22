import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logSercive/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();


  constructor(@Optional() private logService: LogService) { }
  getSeries(x: number) {
    let sum: number = 1;
    let term: number = x;
    let factorial: number = 1;
    let n: number = 1;
    let min: number = 1E-12;

    while (Math.abs(term) > min) {
      sum += term;
      n++;
      factorial *= n;
      term = Math.pow(x, n) / factorial;
    }

    return sum;
  }

  getTab(xn: number = 0, xk: number = 1, h: number = 0.1) {
    let x = xn,
      y = 0.0;
    while (x <= xk) {
      y = this.getSeries(x)
      this.xy.set(x, y)
      if (this.logService) this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4))
      x = x + h;
    }
    return this.xy
  }

}
