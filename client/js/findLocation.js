//initialize
map.setView([31.644,35.107], 7);

let coords;

let myLocation = document.getElementsByClassName("my-location")[0]
myLocation.addEventListener('click',()=>{
    navigator.geolocation.getCurrentPosition(position => {
        coords = position.coords;
        // Show a map centered at latitude / longitude.
        createMarker([coords.latitude,coords.longitude])
        // createCircle([coords.latitude,coords.longitude])
        map.setView([coords.latitude,coords.longitude], 12);
      });
})

 function createMarker(location){
    L.marker(location).addTo(map)
    .bindPopup('My Location :' + location.toString())
    .openPopup();
 }

//  function createCircle(location){
//     L.circle(location,{radius:1000}).addTo(map)
//  }

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
    radius: 6,
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
    // console.log(event)
    // console.log(event.latlng)
    let feature = createGeoJsonFeature([event.latlng.lng,event.latlng.lat])
    ///console.log(feature)
    ///let tempMarker = L.circleMarker([event.latlng.lat,event.latlng.lng],circleOptions).addTo(map)
    // if(prompt("Do you want to add a new location?\nType 'yes' to confirm") === "yes"){
    //     let tempMarker = L.circleMarker([event.latlng.lat,event.latlng.lng],circleOptions).addTo(map)
    // }

})

// var feature
// map.on('click',(event)=>{
//     console.log(event)
//     console.log(event.latlng)
//     let feature = createGeoJsonFeature([event.latlng.lng,event.latlng.lat])
//     console.log(feature)
//     L.circleMarker([event.latlng.lat,event.latlng.lng],circleOptions).addTo(map)
// })

