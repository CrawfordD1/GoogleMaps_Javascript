var whereAmI = function(){
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    window.alert("Your Location: " + " " + `Lat: ${crd.latitude}` + " | " + `Long: ${crd.longitude}`);
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
}



var initialize = function(){
  var center = {lat: 55.857103, lng: -4.243951};
  var zoom = 11;
  var mapDiv = document.querySelector('#main-map')
  var mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);
  mainMap.addClickEvent();

  var button = document.querySelector('#bounce-button');
  button.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var randombutton = document.querySelector('#random-button');
  randombutton.addEventListener('click', mainMap.setRandomLocation.bind(mainMap));

  var wherebutton = document.querySelector('#whereami-button');
  wherebutton.addEventListener('click', whereAmI);

  var homeButton = document.querySelector('#home_button');
  homeButton.addEventListener('click', mainMap.goHome.bind(mainMap));

}



window.addEventListener('load', initialize)