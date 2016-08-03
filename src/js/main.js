"use strict";
import "../../node_modules/material-design-lite/dist/material.js";
import ApplicationController from "./ApplicationController.js";

const app = new ApplicationController();

global.googleMapsCallback = function () {
  app.initMap();
}
