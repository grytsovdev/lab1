import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  linechart: any;
  xn: number = 0;
  xk: number = 0;
  h: number = 0;
  a: number = 0;
  xx: string[] = [];
  yy: string[] = [];
  data1: string[] = [];
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {}

  lineChartMethod() {
    console.log("graph")
    if (this.linechart instanceof Chart) this.linechart.destroy();
    this.linechart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік фунцкії',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          },
        ],
      },
    });
  }
  graphras(xn: any, xk: any, a: any, h: any) {
    console.log("here")
    this.data1 = [];
    
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number,
      y: number,
      i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.xk) {
      y = Math.pow(Math.abs(5), Math.sin(x) + 2) * x + Math.sin(x);
      if (x <= 0) {
      } else {
        if (x <= this.a) {
          y = Math.sqrt(Math.sin(x * x + 3) + 4) / (x * x + 2);
        } else {
          y =
            Math.pow(Math.sin(x + 2), 3) /
            Math.log(Math.abs(x * x + 3 * x + 1));
        }
      }

      this.xx.push(x.toFixed(1));
      this.yy.push(y.toFixed(1));
      let s = 'x = ' + x.toFixed(1) + ' y=' + y.toFixed(1);
      console.log(s)
      this.data1.push(s);
      console.log(s)
      x = x + this.h;
    }
    this.lineChartMethod();
  }
}
