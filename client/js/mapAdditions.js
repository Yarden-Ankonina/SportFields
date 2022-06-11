var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1, 
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
                <td colspan="2">' + (feature.properties['שם_המ'] !== null ? autolinker.link(feature.properties['שם_המ'].toLocaleString()) : '') + '</td>\
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



function stylesportData_0() {
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
        fillColor: 'rgba(232,113,141,1.0)',
        interactive: true,
    }
}
function notify(e){
    console.log(e.sourceTarget.feature.properties)
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


/*
 var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['שם_המ'] !== null ? autolinker.link(feature.properties['שם_המ'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['רשות'] !== null ? autolinker.link(feature.properties['רשות'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ישוב'] !== null ? autolinker.link(feature.properties['ישוב'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מספר'] !== null ? autolinker.link(feature.properties['מספר'].toLocaleString()) : '') + '</td>\
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
                <td colspan="2">' + (feature.properties['ציר_X'] !== null ? autolinker.link(feature.properties['ציר_X'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ציר_Y'] !== null ? autolinker.link(feature.properties['ציר_Y'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מספר_2'] !== null ? autolinker.link(feature.properties['מספר_2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['בעלי'] !== null ? autolinker.link(feature.properties['בעלי'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['גוף_מ'] !== null ? autolinker.link(feature.properties['גוף_מ'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['טלפון'] !== null ? autolinker.link(feature.properties['טלפון'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['דואל'] !== null ? autolinker.link(feature.properties['דואל'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מספר_3'] !== null ? autolinker.link(feature.properties['מספר_3'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מספר_4'] !== null ? autolinker.link(feature.properties['מספר_4'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['מספר_5'] !== null ? autolinker.link(feature.properties['מספר_5'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['פנוי'] !== null ? autolinker.link(feature.properties['פנוי'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['גידור'] !== null ? autolinker.link(feature.properties['גידור'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['תאורה'] !== null ? autolinker.link(feature.properties['תאורה'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['נגישו'] !== null ? autolinker.link(feature.properties['נגישו'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['חניה'] !== null ? autolinker.link(feature.properties['חניה'].toLocaleString()) : '') + '</td>\
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
            <tr>\
                <td colspan="2">' + (feature.properties['שנת_ה'] !== null ? autolinker.link(feature.properties['שנת_ה'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['משרת'] !== null ? autolinker.link(feature.properties['משרת'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
*/