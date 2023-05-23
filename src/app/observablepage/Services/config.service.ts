import { DEFAULT_CURRENCY_CODE, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CityList } from '../Classes/CityList';
import { City } from '../Classes/City';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  currentCity = DEFAULT_CITY
  city$: BehaviorSubject<City> = new BehaviorSubject<City>(DEFAULT_CITY)
  selectCity(city: City) {
    console.log("change")
    this.city$.next(city)
  }
  constructor() { }
}
var cityList = new CityList();
const DEFAULT_CITY = cityList.citym.get(0)
