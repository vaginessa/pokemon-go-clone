"use strict";

export default class ApplicationController {

  constructor() {
    this.mapEl = document.getElementById('map');
  }

  initMap() {
    const map = new google.maps.Map(this.mapEl, {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      scrollwheel: false,
      zoom: 8
    });
  }
}
