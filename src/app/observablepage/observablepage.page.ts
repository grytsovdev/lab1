import { Component, OnInit } from '@angular/core';
import { CityList } from './Classes/CityList';
import { ConfigService } from './Services/config.service';
import { Subscription } from 'rxjs';
import { FactoryList } from './Classes/FactoryList';
import { City } from './Classes/City';
import { Factory } from './Classes/Factory';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  cities = new CityList();

  private configServive = new ConfigService();

  private subsriptions: Subscription[] = [];

  factoryList = new FactoryList(this.configServive);

  city: City = new City();

  count = 0

  constructor() { }

  ngOnInit() {
    const citySub = this.configServive.city$
      .subscribe(() => { this.city = this.configServive.city$.value });
    this.subsriptions.push(citySub)
  }
  nextCity() {
    if (this.count < this.cities.citym.size - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configServive.selectCity(this.cities.citym.get(this.count))
  }
  addCity(city: any) {
    let c = new City();
    c.id = this.cities.citym.size;
    c.name = city
    this.cities.add(c);
  }

  addFactory(name: any, type: any) {
    let factory = new Factory();
    factory.name = name;
    factory.type = type;
    factory.city_id = this.city.id;
    this.factoryList.add(factory)

  }
  ngOnDestroy() {
    this.subsriptions.forEach(s => s.unsubscribe());
  }

}
