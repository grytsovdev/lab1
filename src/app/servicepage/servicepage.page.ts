import { Component, OnInit } from '@angular/core';
import { TabService } from './services/tabService/tab.service';
import { SeriesService } from './services/seriesService/series.service';
import { RecursionService } from './services/recursionService/recursion.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {

  constructor(private tabService: TabService,
    private seriesService: SeriesService,
    private recurisonService: RecursionService) { }

  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();

  input() {
    this.xyTab.forEach((value, key, map) => {
      let s = "";
      let y: number = 0;
      y = value;
      s = y.toFixed(4) + " ";
      y = this.xySeries.get(key);
      s = s + y.toFixed(4)
      y = this.xyRecursion.get(key);
      s = s + " " + y.toFixed(4)
      let x = key;
      this.xyInput.set(x.toFixed(2), s);
    }

    )
  }

  ras(xn: any, xk: any, h: any) {
    let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
    this.xyTab = this.tabService.getTab(xn1, xk1, h1);
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    this.xyRecursion = this.recurisonService.getTab(xn1, xk1, h1);
    this.input();
  }

  ngOnInit() {
  }

}
