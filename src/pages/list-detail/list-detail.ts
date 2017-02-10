import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ActionSheetController, ItemSliding , IonicApp, IonicModule, TextInput, NavParams, ViewController  } from 'ionic-angular';
import { MyData } from '../../providers/my-data';
/*
  Generated class for the ListDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html'
})
export class ListDetail {
	movie:any;
  constructor(public navCtrl: NavController,
  	public MyData: MyData,
    public loadCtrl: LoadingController,
    public navParams: NavParams
    ) {
  	console.log(navParams.data);
  	this.movie = navParams.data;
  	let loading = this.loadCtrl.create({
        content: 'Getting movies...'
    });

    loading.present().then(() => {
      	console.log('moive ID1');
        this.MyData.getmovieByID(this.movie.id)
            .subscribe(
            (data: any) => {
          		console.log(JSON.parse(data._body));
          		let subjects = JSON.parse(data._body)
				this.movie.title = subjects.title;
				this.movie.concent = subjects.summary;
				this.movie.imgsrc = subjects.images.large;
            	loading.dismiss();
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

  ionViewDidLoad() {
    console.log('Hello ListDetail Page');
  }


}
