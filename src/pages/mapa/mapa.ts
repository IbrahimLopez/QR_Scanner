import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { LatLng } from '@ionic-native/google-maps';
import {} from '@types/googlemaps';



@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  @ViewChild('gmap') gmapElement: any;
  posicionInicial: LatLng = new LatLng(31.863195, -112.848848);
  marcador: google.maps.Marker;
  map: google.maps.Map;


  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    let coordsArray = this.navParams.get('coords').split(',');
    this.posicionInicial.lat = Number(coordsArray[0].replace("geo:",""));
    this.posicionInicial.lng = Number(coordsArray[1]);
    console.log(this.posicionInicial.lat, this.posicionInicial.lng);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');    
    this.startGoogleMap(this.posicionInicial);
  }


  //Carga el mapa de google maps en la vista
  startGoogleMap(posicion) { 
    //Si el mapa es falso o ha sido creado, se creara de nuevo  
    if (this.map == null) 
    {
      const mapProp: google.maps.MapOptions = {
        center: posicion,
        zoom: 15,
        streetViewControl: false,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
    
    this.marcador = new google.maps.Marker({
      position: new google.maps.LatLng(posicion.lat,posicion.lng),
      map: this.map
    });
  }

  cerrar(){
    this.viewCtrl.dismiss();
  }

}
