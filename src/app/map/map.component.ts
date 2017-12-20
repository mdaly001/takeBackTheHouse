import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {

  }
  options: any;
  layerControls: any;


  ngOnInit() {
    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 5,
      center: L.latLng(34.176824756829674, -117.32409747539066)
    };

    this.layerControls = {
      overlays: {
        'Big Circle': L.circle([34.176824756829674, -117.32409747539066], { radius: 500, color: 'red', fillColor: '#f03' })
      }
    }
  }
}
