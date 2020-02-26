import { Component } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    // const newMarker = new Marker(51.678418, 7.809007);
    // this.markers.push(newMarker);

    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  addMarker(event) {

    const coords: { lat: number, lng: number } = event.coords;
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);

    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  deleteMarker(i: number) {

    this.markers.splice(i,1);
    this.saveStorage();
  }
}
