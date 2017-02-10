import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MyData } from '../../providers/my-data';
/*
  Generated class for the Index page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  //this is important param can make page become template page
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
  Tabs = TabsPage;
  items :any[];
  constructor(public navCtrl: NavController,public MyData: MyData) {
    // let jsonData = this.MyData.getHomeList();
    this.items = [];
    this.MyData.getIndexImg()
      .subscribe(
      (data: any) => {
        console.log(JSON.parse(data._body));
        let subjects = JSON.parse(data._body).subjects;
        for (let i = 0; i < 3; i++) {
          this.items.push({
            src : subjects[i].images.large
          });
        }
      })
  }

  ionViewDidLoad() {
    console.log('Hello Index Page');
  }

}
