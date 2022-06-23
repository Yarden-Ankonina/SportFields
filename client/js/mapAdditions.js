
const initMapData = ()=>{
    Array.from(jsonsportData.features).forEach(element => {
        element.properties['Popularity'] = ''
    });
    
}

initMapData()
setInterval( initMapData, 1000 * 60 * 60 * 24)
///reset popularity once a day
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1, zoom:7,
}).fitBounds([[29.62402167801796,31.794698098564503],[33.62264212599872,38.40611842831727]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_OSMStandard_0');
map.getPane('pane_OSMStandard_0').style.zIndex = -1;
var layer_OSMStandard_0 = L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OSMStandard_0',
    opacity: 1.0,
    attribution: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OSMStandard_0;
map.addLayer(layer_OSMStandard_0);
function popsportData(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Field name'] !== null ? autolinker.link(feature.properties['Field name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['רשות'] !== null ? autolinker.link(feature.properties['רשות'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ישוב'] !== null ? autolinker.link(feature.properties['ישוב'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['סוג_מ'] !== null ? autolinker.link(feature.properties['סוג_מ'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['שכונה'] !== null ? autolinker.link(feature.properties['שכונה'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['רחוב'] !== null ? autolinker.link(feature.properties['רחוב'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מספר_1'] !== null ? autolinker.link(feature.properties['מספר_1'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['בעלי'] !== null ? autolinker.link(feature.properties['בעלי'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['גוף_מ'] !== null ? autolinker.link(feature.properties['גוף_מ'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['דואל'] !== null ? autolinker.link(feature.properties['דואל'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מצב_ה'] !== null ? autolinker.link(feature.properties['מצב_ה'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מתקן'] !== null ? autolinker.link(feature.properties['מתקן'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['שימוש'] !== null ? autolinker.link(feature.properties['שימוש'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}



function stylesportData_0(e) {
    let fillColor = '#b381ec'
    if(e.properties.Popularity !==''){
        switch(e.properties.Popularity){
            case 'Empty':
                fillColor = 'green'
                break;
            case 'Populated':
                fillColor = 'yellow'
                break;
            case 'Crowded':
                fillColor = 'red'
            break;
        }
    }
    
    return {
        pane: 'panesportData',
        radius: 6.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: fillColor,
        interactive: true,
    }
}
let fieldEditName =  document.getElementsByClassName('field-edit-name')[0]

let currentLayer
function notify(e){
    let layer
    if(layersportData._layers[e.sourceTarget._leaflet_id] === undefined){
        addMarker(e)
        layer = layersportData._layers[e.sourceTarget._leaflet_id]
        currentLayer = layer
    }
    else{
        layer = layersportData._layers[e.sourceTarget._leaflet_id]
        currentLayer = layer
    }
    if(fieldEdit.classList.contains('collapse')){
        fieldEdit.classList.toggle('collapse')
    }
    fieldEditName.innerHTML = e.sourceTarget.feature.properties['Field name']
    updatePopularity()
}

map.createPane('panesportData');
map.getPane('panesportData').style.zIndex = 0;
map.getPane('panesportData').style['mix-blend-mode'] = 'normal';
var layersportData = new L.geoJson(jsonsportData, {
    attribution: '',
    interactive: true,
    dataVar: 'jsonsportData',
    layerName: 'layersportData',
    pane: 'panesportData',
    onEachFeature: popsportData,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {},
        };
        return L.circleMarker(latlng, stylesportData_0(feature)).on('click',notify);
    },
});
bounds_group.addLayer(layersportData);
map.addLayer(layersportData);
setBounds();


if(window.localStorage.getItem('sportAddedData') !== null){
    jsonSportAddedDataContainer = JSON.parse(localStorage.getItem('sportAddedData'))
    createLayerFromData()
}
var layersportDataAddition


function createLayerFromData(){
    layersportDataAddition = new L.geoJson(jsonSportAddedDataContainer, {
        attribution: '',
        interactive: true,
        dataVar: 'jsonSportAddedDataContainer',
        layerName: 'layersportDataAddition',
        pane: 'panesportData',
        onEachFeature: popupAttach,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {},
            };
            return L.circleMarker(latlng, stylesportData_0(feature)).on('click',notify2);
        },
    });
map.addLayer(layersportDataAddition);
}

function popupAttach(e,layer){
    let popupText = ''
    Object.entries(e.properties).forEach(element =>{
        popupText += element[0] +": "+ element[1] + '<br/>'
    })
    layer.bindPopup(popupText)
}

function notify2(e){
    let layer
    if(layersportDataAddition._layers[e.sourceTarget._leaflet_id] === undefined){
        addMarker(e)
        layer = layersportDataAddition._layers[e.sourceTarget._leaflet_id]
        currentLayer = layer
    }
    else{
        layer = layersportDataAddition._layers[e.sourceTarget._leaflet_id]
        currentLayer = layer
    }
    if(fieldEdit.classList.contains('collapse')){
        fieldEdit.classList.toggle('collapse')
    }
    fieldEditName.innerHTML = e.sourceTarget.feature.properties['Field name']
    updatePopularity()
}