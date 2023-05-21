import { Component, OnInit } from '@angular/core';
import { Transport } from './classes/Transport';
import { Boat } from './classes/Boat';
import { Plane } from './classes/Plane';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.page.html',
  styleUrls: ['./abstract.page.scss'],
})
export class AbstractPage implements OnInit {

  ports: string[] = ["Kyiv", "Odesa", "Dnipro"]

  transtport: Transport[] = [];

  constructor() { }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 1)
  }
  getRandomPort() {
    return this.ports[Math.floor(Math.random() * this.ports.length)];
  }

  ngOnInit() {
  }

  ras(nn: any) {
    this.transtport = new Array();
    let n = parseInt(nn)
    for (let i = 0; i < n; i++) {
      this.transtport.push(new Boat(this.getRandomInt(5), this.getRandomPort()))
      this.transtport.push(new Plane(this.getRandomInt(8), this.getRandomInt(5)))
    }

  }


}
