import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})


export class JSONPage implements OnInit {

  data: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = "https://api.jsonbin.io/v3/b/6469182c8e4aa6225ea0c616";
  loading: any;
  loadClicked: boolean = false;

  constructor(public loadingController: LoadingController) {

  }

  ngOnInit() {
  }

  async load() {
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: "Loading..."
    })



    await this.loading.present();
    fetch(this.dataUrl, {
      method: 'GET',
      headers: {
        'X-Master-Key': '$2b$10$V/PfEjD3fuAaH0TYO1y.RuZvT7YM95ec2SmYhNV921rLNqK0wot3q',
      },
    }).then(res => res.json()).then(json => {
      let response = json.record

      for (var i in response) { this.data.push(response[i]) }
      console.log(this.data)


      this.loading.dismiss();
      this.loadClicked = true;
    })

  }

  toggleDetails(i: number) {
    if (this.showDetails[i]) this.showDetails[i] = false
    else this.showDetails[i] = true;
  }



  checkDate(date: any, item: any) {
    console.log("here")
    let formated = new Date(date).getMonth()
    let itemDate = new Date(item.date).getMonth()
    console.log(formated === itemDate)
    return formated === itemDate
  }


}
