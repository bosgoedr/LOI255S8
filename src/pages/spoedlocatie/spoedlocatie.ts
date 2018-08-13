import { Component,NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormControl } from "@angular/forms";
import { } from "googlemaps";
import { MapsAPILoader } from '@agm/core';
//import { map } from '../../../node_modules/rxjs/operator/map';

/**
 * Generated class for the SpoedlocatiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spoedlocatie',
  templateUrl: 'spoedlocatie.html',
})
export class SpoedlocatiePage {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef;

    constructor(public navCtrl: NavController, public navParams: NavParams, private mapsAPILoader: MapsAPILoader,
            private ngZone: NgZone, public alertCtrl: AlertController)  {
    this.zoom = 15;
    this.latitude = 52.258295;
    this.longitude = 6.147307;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

}

ionViewDidLoad() {
    //set google maps defaults
    this.zoom = 15;
    this.latitude = 52.258295;
    this.longitude = 6.147307;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
        let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
        let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
            types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
                //get the place result
                let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }

                //set latitude, longitude and zoom
                this.latitude = place.geometry.location.lat();
                this.longitude = place.geometry.location.lng();
                this.zoom = 15;
            });
        });
    });
}

  private setCurrentPosition() {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              this.zoom = 15;
          });
      }

  }

  alertLocFound() {
    const alert = this.alertCtrl.create({
      title: 'Locatie gevonden',
      subTitle: 'Er is hulp onderweg, blijf waar u bent',
      buttons: ['OK']
    });
    alert.present();
  }

}
