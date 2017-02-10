import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ActionSheetController, ItemSliding , IonicApp, IonicModule, TextInput, NavParams, ViewController  } from 'ionic-angular';
import { MyData } from '../../providers/my-data';
import { ListDetail } from '..//list-detail/list-detail';
/*
  Generated class for the ListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-page',
  templateUrl: 'list-page.html'
})
export class ListPage {
	movies: any[];
	item:any;
	movieIDs: any;
	previousIndex: number;
	moviesRetreived: any[];
	searchStr: any;
	ngvalue: any;
	ngid:any;
  constructor(public navCtrl: NavController,
  	public MyData: MyData,
    public loadCtrl: LoadingController,
    public navParams: NavParams) {
  	this.item = navParams.data;
  	this.searchStr = this.item.key;
  }

  ionViewDidLoad() {
    console.log('Hello ListPage Page');
	    this.MyData.getHomeInto(this.searchStr)
      .subscribe(
      (data: any) => {
      	console.log(JSON.parse(data._body));
      	//to empty
      	this.movies = [];
      	let subjects = JSON.parse(data._body).subjects;
        for (let i = 0; i < 20; i++) {
          this.movies.push({
          	original_title : subjects[i].original_title,
          	year : subjects[i].year,
          	directors : subjects[i].directors[0].name,
          	title : subjects[i].title,
          	src : subjects[i].images.medium,
          	id : subjects[i].id
          });
        }
      }
  );

	}
	gotoDetail(sessionData){
  		console.log(sessionData);
  		this.navCtrl.push(ListDetail, sessionData);
  	}
}