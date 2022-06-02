let coords;
navigator.geolocation.getCurrentPosition(position => {
    coords = position.coords;
    // Show a map centered at latitude / longitude.
    createMarker([coords.latitude,coords.longitude])
  });

 function createMarker(location){
    L.marker(location).addTo(map)
    .bindPopup('My Location')
    .openPopup();
 }
 