import { Component, OnInit } from '@angular/core';
import { Oficer } from './classes/Oficer';
import { Engineer } from './classes/Engineer';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.page.html',
  styleUrls: ['./interface.page.scss'],
})
export class InterfacePage implements OnInit {
  show: string = ""
  constructor() { }

  ngOnInit() {
  }
  ras() {
    console.log("here")
    let oficer = new Oficer("Bob", 35);
    this.show = oficer.work();
    let engineer = new Engineer("Frank", 23)
    this.show = this.show + `\n` + engineer.work();
  }
}
