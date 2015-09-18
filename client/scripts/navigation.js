// Initial Get Current Position:

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

// If Position can be located:

function success(pos) {
  temp_icon = L.icon({
    iconUrl: "http://i.imgur.com/gtfSEkP.png",
    iconSize: [22, 27]
  });
  var crd = pos.coords;
  userLoc = [crd.latitude, crd.longitude];
  var latitude = crd.latitude;
  var longitude = crd.longitude;
  $(".userloc").text("Lat is:" + latitude + " and Long is " + longitude)
  console.log('User Position is at: ' + userLoc);
  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('Accurate within about: ' + crd.accuracy + ' meters.');

 //Add current Position marker

  L.marker(userLoc, {
    icon: temp_icon
  }).addTo(map);
};

// If Position cannot be located:
function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
// Find Position
navigator.geolocation.watchPosition(success, error, options);

//Render Map
Template.map.rendered = function() {
  console.log("-----Rendering Map-----")
  temp_icon = L.icon({
    iconUrl: "http://i.imgur.com/gtfSEkP.png",
    iconSize: [22, 27]
  });
  // L.Icon.Default.imagePath = 'http://api.tiles.mapbox.com/mapbox.js/'
  map = L.map("map", { zoomControl: false }).setView([38.897604, -76.9912402], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/phantomhaircuts.1a4dda09/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGhhbnRvbWhhaXJjdXRzIiwiYSI6Ijc4NzQzY2IyOTg4NzVhNWFlNzJkZjI5Y2FjNmE3NzNmIn0.1jakhTTyrFLd70ccY0wkRw', {
  maxZoom: 20
  }).addTo(map);
  // new L.Control.Zoom({ position: 'bottomright' }).addTo(map);
};

// Create Map Markers
// Template.map.created = function() {
//   function addPinsToMap() {
//     temp_icon = L.icon({
//       iconUrl: "http://i.imgur.com/gtfSEkP.png",
//       iconSize: [22, 27]
//     });
//     var pins = Pins.find().fetch();
//     console.log("-----------")
//     console.log(pins)
//     pins.forEach(function(pinObject){
//       L.marker(pin.pinLoc, {
//         icon: temp_icon
//       }).addTo(map);
//     })
//   }
//  addpinsToMap()
// }
