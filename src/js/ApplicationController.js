"use strict";
import MapController from './MapController.js';

export default class ApplicationController {

  constructor() {
    this.MapController = new MapController();
  }

  initMap() {
    this.MapController.initMap();
  }
}
