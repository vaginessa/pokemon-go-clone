"use strict";
import MapController from './MapController.js';
const io = require('socket.io-client');

export default class ApplicationController {

  constructor() {
    this.MapController = new MapController();
    this.registerServiceWorker();
    this.testWebSockets();
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

  testWebSockets() {
    const socket = io.connect('//localhost:3000');
    socket.emit('test');
  }
}
