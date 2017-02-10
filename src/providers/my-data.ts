import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {

  constructor(public http: Http) {
    console.log('Hello MyData Provider');
  }

  public getmovie(str: string): Observable<any> {
    return this.http.get('https://api.douban.com/v2/movie/search?start=1&count=20&q='+str)
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  public getmovieByID(movieID: number): Observable<any> {
    return this.http.get('https://api.douban.com/v2/movie/subject/'+movieID)
      // .map(this.extractData)
      // .catch(this.handleError);
  }

  public getHomeInto(homeID:number): Observable<any>{
  	return this.http.get('https://api.douban.com/v2/movie/'+homeID)
  }

  public getIndexImg(): Observable<any>{
  	return this.http.get('https://api.douban.com/v2/movie/in_theaters?start=1&count=3')
  }

  // public extractData(res: Response) {
    // let body = res.json();
    // return body || {};
  // }

  // public handleError(error: any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   // We'd also dig deeper into the error to get a better message
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg); // log to console instead
  //   return Observable.throw(errMsg);
  // }
}
