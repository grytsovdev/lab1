import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  N: number = 0;
  matrix: number[][] = [];
  sum: number = 0;

  generateMatrix(N: any) {
    for (let i = 0; i < N; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < N; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10);
      }
    }

    let sum = 0;
    for (let i = 0; i < N; i++) {
      sum += this.matrix[i][i];
    }
    this.sum = sum;
  }
  ngOnInit() {}
}
