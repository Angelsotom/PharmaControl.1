import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';


declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild('mapContainer', { static: false }) mapContainer: ElementRef | undefined;

  map: any;

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  

  async loadMap() {
    try { 
    const { Geolocation } = Plugins;
    const coordinates = await Geolocation['getCurrentPosition']();
    
    const mapOptions = {
      center: new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer?.nativeElement, mapOptions);

    // Marcador en la ubicación actual
    const marker = new google.maps.Marker({
      position: mapOptions.center,
      map: this.map,
      title: 'Ubicación actual'
    });

    alert ('  mapa cargado');

  } catch (error) {
    alert ('error al cargar el mapa. Dispositivo no soporta GPS. '+error);
  }
  }


}