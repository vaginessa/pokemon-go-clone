"use strict";

export default class MapController {

  constructor() {
    this.mapEl = document.getElementById('map');
    this.playerLocation = { lat: -34.397, lng: 150.644 };
    this.locationInterval = setInterval(this.updateLocation.bind(this), 500);
  }

  initMap() {
    this.map = new google.maps.Map(this.mapEl, {
      center: this.playerLocation,
      draggable: false,
      scrollwheel: false,
      streetViewControl: false,
      zoomControl: false,
      mapTypeControl: false,
      zoom: 19
    });
    const markerImage = {
      url: '/images/player-icon.png',
      size: new google.maps.Size(17, 25),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(8, 25),
    };
    this.playerMarker = new google.maps.Marker({
      position: this.playerLocation,
      icon: markerImage,
      map: this.map
    });
  }

  updateLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.playerLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.map.panTo(this.playerLocation);
        this.playerMarker.setPosition(this.playerLocation);
      });
    }
  }
}
