import { ConfigService } from "../Services/config.service";
import { Factory } from "./Factory";

export class FactoryList {
    private factoryList = new Array();
    private searchFactory = new Array();
    searchFarctoryResult: string[] = []

    citySub = this.configService.city$

        .subscribe(() => {
            let city = this.configService.city$.value;
            this.search(city.id)
        })

    constructor(private configService: ConfigService) {
        let factory = new Factory();
        factory.name = "Ковбаска";
        factory.city_id = 0;
        factory.type = "М'ясокомбінат";
        this.add(factory);
        let factory1 = new Factory();
        factory1.name = "Сталевий";
        factory1.city_id = 1;
        factory1.type = "Металообробний завод";
        this.add(factory1);
        this.search(0);

    }
    search(id_city: number) {
        this.searchFactory = this.factoryList.filter((factory) => {
            return factory.city_id == id_city;
        })
        this.searchFarctoryResult = [];
        this.searchFactory.forEach(el => {
            this.searchFarctoryResult.push("Назва: " + el.name)
            this.searchFarctoryResult.push("Тип: " + el.type)
        })
    }
    add(factory: Factory) {
        this.factoryList.push(factory);
        this.search(factory.city_id)
    }

}