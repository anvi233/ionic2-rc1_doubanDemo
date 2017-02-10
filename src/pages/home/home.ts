import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MyData } from '../../providers/my-data';
import { ListPage } from '../list-page/list-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	items :any[];
  constructor(public navCtrl: NavController,public MyData: MyData,) {
  	// let jsonData = this.MyData.getHomeList();
  	this.items = [];
  	
  }
  ionViewDidLoad() {
    console.log('Hello Index Page');
    let json = 
	[{ key: "in_theaters", name: "正在热映" },
      { key: "coming_soon", name: "即将上映" },
      { key: "top250", name: "T0P250" },
      { key: "us_box", name: "北美票房榜" }]
    // let jsonData = JSON.parse(json);
  	console.log('1111');
  	for (let i = 0 ; i < 4 ; i++) {
  		this.items[i] = json[i];
  	}
  }
  itemSelected(sessionData){
  	this.navCtrl.push(ListPage, sessionData);
  }

}
