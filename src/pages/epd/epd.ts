import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-epd',
  templateUrl: 'epd.html',
})
export class EpdPage {
  public items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.getMessages();
    console.log('ionViewDidLoad EpdPage');
  }

  getMessages(){
    let data:Observable<any>;
    data = this.http.get('https://jsonplaceholder.typicode.com/posts');
    data.subscribe(result => {
      this.items = result;
    })
  }
}
