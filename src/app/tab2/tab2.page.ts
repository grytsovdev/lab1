import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  d: number = 0;
  arr(a: any, b: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      if (isNaN(this.a) || isNaN(this.b)) throw new Error('invalid input');
      let sum = 1;

      for (var i = this.a; i < this.b; i++) {
        if (i % 7 === 0 && i < 30 && i !== 0) {
          sum *= i;
        }
      }
      this.d = sum;
    } catch (error) {
      console.log(error);
    }
  }
}
