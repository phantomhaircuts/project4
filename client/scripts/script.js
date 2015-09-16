// Get Current Position
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  userLat = crd.latitude;
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('Accurate within about: ' + crd.accuracy + ' meters.');
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.watchPosition(success, error, options);


// create marker collection
// var Markers = new Meteor.Collection('markers');
//
// Meteor.subscribe('markers');
//
// Template.map.rendered = function() {
//   var map = L.map("map").setView([38.897604, -76.9912402], 16);
//   L.tileLayer('https://api.tiles.mapbox.com/v4/phantomhaircuts.1a4dda09/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGhhbnRvbWhhaXJjdXRzIiwiYSI6Ijc4NzQzY2IyOTg4NzVhNWFlNzJkZjI5Y2FjNmE3NzNmIn0.1jakhTTyrFLd70ccY0wkRw', {
//   maxZoom: 20
//   }).addTo(map);
// };
