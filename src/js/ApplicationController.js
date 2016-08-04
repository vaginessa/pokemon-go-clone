"use strict";
import MapController from './MapController.js';

export default class ApplicationController {

  constructor() {
    this.MapController = new MapController();
    this.registerServiceWorker();
  }

  // Called from Google Maps API Callback
  initMap() {
    this.MapController.initMap();
  }

  registerServiceWorker() {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js', { scope: './' })
        .then(function(r) {
          console.log('registered service worker');
        })
        .catch(function(whut) {
          console.error('could not register service worker');
        });
    });
  }
}
