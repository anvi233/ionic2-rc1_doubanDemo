import { Component ,Input , NgModule} from '@angular/core';

import { NavController, LoadingController, AlertController, ActionSheetController, ItemSliding , IonicApp, IonicModule, TextInput, NavParams, ViewController  } from 'ionic-angular';
import { MyData } from '../../providers/my-data';
import { ListDetail } from '..//list-detail/list-detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

	movies: any[];
	movieIDs: any;
	previousIndex: number;
	moviesRetreived: any[];
	searchStr: any;
	ngvalue: any;
	ngid:any;
	ListDetail = ListDetail;
  constructor(public navCtrl: NavController,
  	public MyData: MyData,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public actionCtrl: ActionSheetController) {
  	this.movies = [];
  }
  doSearch(){
  	this.searchStr = this.ngvalue;
  	console.log('search');
  	let loading = this.loadCtrl.create({
        content: 'Getting movies...'
      });

      loading.present().then(() => {
      	console.log('search1');
        this.MyData.getmovie(this.searchStr)
          .subscribe(
          (data: any) => {
          	console.log(JSON.parse(data._body));
          	//to empty
          	this.movies = [];
          	let subjects = JSON.parse(data._body).subjects;
            // this.movieIDs = data;
            // this.previousIndex = this.movieIDs.length - 20;
            for (let i = 0; i < 20; i++) {
              // let id = data[i],
              //"subjects":{"rating": {"max": 10, "average": 0, "stars": "00", "min": 0}, "genres": ["\u7eaa\u5f55\u7247"], "title": "\u6211\u5728\u771f\u7406\u6559\u7684\u65e5\u5b502", "casts": [], "collect_count": 58, "original_title": "A\u00b2", "subtype": "movie", "directors": [{"alt": null, "avatars": null, "name": "\u68ee\u9054\u4e5f", "id": null}], "year": "2001", "images": {"small": "https://img1.doubanio.com\/spic\/s1732448.jpg", "large": "https://img1.doubanio.com\/lpic\/s1732448.jpg", "medium": "https://img1.doubanio.com\/mpic\/s1732448.jpg"}, "alt": "https:\/\/movie.douban.com\/subject\/1844225\/", "id": "1844225"},
              this.movies.push({
              	original_title : subjects[i].original_title,
              	year : subjects[i].year,
              	directors : subjects[i].directors[0].name,
              	title : subjects[i].title,
              	src : subjects[i].images.medium,
              	id : subjects[i].id
              });
              //this make loading hide,and different from ionic 1
              loading.dismiss();
            }
          },
          (error: Error) => {
            console.log(error);
            loading.dismiss();
          }, () => {
	          loading.dismiss();
	        }
          )
      })
  }
  	gotoDetail(sessionData){
  		console.log(sessionData);
  		this.navCtrl.push(ListDetail, sessionData);
  	}
  }
