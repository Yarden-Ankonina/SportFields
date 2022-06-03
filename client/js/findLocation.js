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

 function createGeoJsonFeature(coordinates){
    return{
        "type": "Feature",
        "properties": {
            "name": "Coors Field",
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": coordinates
        }
    }
}
var circleOptions = {
    pane: 'panesportData',
    radius: 4,
    opacity: 1,
    color: 'rgba(35,35,35,1.0)',
    dashArray: '',
    lineCap: 'butt',
    lineJoin: 'miter',
    weight: 1,
    fill: true,
    fillOpacity: 1,
    fillColor: 'rgba(232,113,141,1.0)',
    interactive: true,
 }

var feature
map.on('click',(event)=>{
    console.log(event.latlng)
    let feature = createGeoJsonFeature([event.latlng.lng,event.latlng.lat])
    console.log(feature)
    // L.circle([event.latlng.lat,event.latlng.lng],circleOptions).addTo(map)
    L.circleMarker([event.latlng.lat,event.latlng.lng],circleOptions).addTo(map)
//     L.geoJSON(feature,{
//     }).addTo(map);
// }) 
})

// var c = L.circle([32.5,34.5],{
//     color: 'pink',
//     fillColor: '#f03',
//     fillOpacity : 0.5,
//     radius: 50000,
// }).addTo(map);


// var circleCenter = [32.5, 34.9];


//  var circle = L.circle(circleCenter, 50000, circleOptions);

//  circle.addTo(map);


// var clickCircle;

// function onMapClick(e) {
//     console.log
//     if (clickCircle != undefined) {
//       map.removeLayer(clickCircle);
//     };

//     clickCircle = L.circle(e.latlng, 1609 * 3, {
//         color: '#f07300',
//         fillOpacity: 0,
//         opacity: 0.5
//       }).addTo(map);
// }

//     map.on('click', onMapClick);