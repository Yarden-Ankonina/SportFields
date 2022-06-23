let jsonSportAddedData = []
let jsonSportAddedDataContainer = {"type":"FeatureCollection","name":"sportAddedData","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":jsonSportAddedData}

if(window.localStorage.getItem('sportAddedData') !== null){
    jsonSportAddedDataContainer = JSON.parse(window.localStorage.getItem('sportAddedData'))
}