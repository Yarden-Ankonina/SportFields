var marker;
map.on('locationfound', function(ev){
    if (!marker) {
        marker = L.marker(ev.latlng);
    } else {
        marker.setLatLng(ev.latlng);
    }
})