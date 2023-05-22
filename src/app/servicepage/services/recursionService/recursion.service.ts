import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logSercive/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }
  getSeriesRecursive(x: number, n: number = 1): number {
    if (n === 1) {
      return 1;
    }

    const term = Math.pow(x, n - 1) / this.factorial(n - 1);
    const previousSum = this.getSeriesRecursive(x, n - 1);

    return previousSum + term;
  }

  factorial(n: number): number {
    if (n === 0) {
      return 1;
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  getTab(xn: number = 0, xk: number = 1, h: number = 0.1) {
    let x = xn,
      y = 0.0;
    while (x <= xk) {
      y = this.getSeriesRecursive(x, 11)
      this.xy.set(x, y)
      if (this.logService) this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4))
      x = x + h;
    }
    return this.xy
  }



}
