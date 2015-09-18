//Update Current Location
$(document).ready(function(){
  $(".locator").on("click", function(event){
    console.log("locator click")
    event.preventDefault;

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      $(".userloc").text("Lat is:" + latitude + " and Long is " + longitude)
      console.log('New Current Location. Lat is ' + latitude + ' Long is ' + longitude);
    };

    function error() {
      console.log("Unable to retrieve your location");
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
});
