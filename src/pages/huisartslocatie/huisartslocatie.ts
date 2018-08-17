import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0 
};

@Component({
  selector: 'page-huisartslocatie',
  templateUrl: 'huisartslocatie.html'
})
export class HuisartslocatiePage {
  eersteHuisarts;
  tmpDoctor="";
  tmpAddress="";
  tmpAfstand;
  afstand;
  adresHuisarts;
  showDetail: boolean = true;
  noArts: boolean = false;

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      this.initMap();
      this.setBlueDot();
    });
  }

  ionViewDidLoad() {
    this.loadNearestHuisarts();
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {

      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
      //  radius: 4000,
        type: ['doctor'],
        rankBy: google.maps.places.RankBy.DISTANCE
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {

          for (var i = 0; i < results.length; i++) {
            if (results[i].name.toLowerCase().includes("huisarts")) {
              this.createMarker(results[i]);
              //zet eerste huisarts
              if (!this.tmpDoctor.toLowerCase().includes("huisarts")){
                this.tmpDoctor = results[i].name;
                this.tmpAddress = results[i].vicinity;
                this.tmpAfstand = this.getDistanceFromLatLonInKm(location.coords.latitude, location.coords.longitude,results[i].geometry.location.lat(), results[i].geometry.location.lng());
                console.log("nearest",this.tmpDoctor);
              }
              console.log(results[i])
            }  
           else{
               console.log("Geen huisarts");
            }            
          }
        }
        this.showDetail = false;
      });
    }, (error) => {
      this.noArts = false;
      this.showReloadAlert();
      console.log("herladen ja/nee",error);    
    }, options);
  }

  setBlueDot(){
    let geoMarker;

    //let watchID: any;
    let my_current_position;
    let image = {
      url: 'assets/imgs/dot.png',
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)}

    navigator.geolocation.watchPosition(function(position){
      my_current_position = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

      if (geoMarker) {
        geoMarker.setMap(null);
        geoMarker=null;
      }
      geoMarker = new google.maps.Marker({
        position: my_current_position,
        map: map,
        title: 'Mijn locatie',
        icon : image
      }); 
      console.log("blue dot", geoMarker)
    }, (error) => {
      console.log("blue dot error",error);
    }, options);
  }

  createMarker(place) {
    let placeLoc = place.geometry.location;
    let image
    let marker
    
    image = {
      url: 'https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png',
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      icon: image
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent('<div><strong>' + place.name + '</strong>' +
        '<br>' + place.vicinity + '</div>');
      infowindow.open(map, this);
    });
  } 

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    console.log(lat1,lon1,lat2,lon2);
    return d;
   }

   deg2rad(deg) {
    return deg * (Math.PI/180)
   }

  loadNearestHuisarts(){
    this.noArts = false;
    let TIME_IN_MS = 5000;
    setTimeout( () => {
      this.afstand = Math.round(this.tmpAfstand * 100) / 100;
      if(this.afstand > 0){
        this.eersteHuisarts = this.tmpDoctor;
        this.adresHuisarts = this.tmpAddress;
      }
      else
      {
        this.eersteHuisarts = "Slecht GPS signaal";
        this.adresHuisarts = "Herlaad de pagina";
        this.noArts = true;
      }
      
      console.log('Huisartslocatie geladen');
    }, TIME_IN_MS);
  }

  showReloadAlert() {
    const confirm = this.alertCtrl.create({
      title: 'Locatie niet gevonden',
      message: 'Klik op "Herladen" om het nogmaals te proberen, of op "Sluiten" om de zoekactie te annuleren',
      buttons: [
        {
          text: 'Sluiten',
          handler: () => {
            console.log('Sluiten clicked');
          }
        },
        {
          text: 'Herladen',
          handler: () => {
            console.log('Herladen clicked');
            options = {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: Infinity 
            };
            this.eersteHuisarts = "";
            this.adresHuisarts = "";
            this.initMap();
            this.setBlueDot();
            this.loadNearestHuisarts();
          }
        }
      ]
    });
    confirm.present();
  }
}
