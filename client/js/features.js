let mapContainer = document.getElementsByClassName('map-container')[0]
let fieldData = document.getElementsByClassName("field-data")[0]
let newFieldDataExit = document.getElementsByClassName("field-data-exit")[0]

newFieldDataExit.addEventListener('click',()=>{
    isAllowToAddField = false
    map.off('mouseover',mapOver)
    map.off('mousemove',mapMouseMove)
    document.body.style.cursor = "auto";
    fieldData.classList.toggle("collapse")
})

let newFieldDataButton = document.getElementById("navbar-new")
newFieldDataButton.addEventListener('click', ()=>{
    fieldData.classList.toggle("collapse")
    if(!fieldData.classList.contains("collapse")){
        initForm()
    }
})

let isCoordChosen = false
let fieldDataSubmit = document.getElementsByClassName("field-data-submit")[0]

fieldDataSubmit.addEventListener('click',async ()=>{
    let formFilled = isFormFilled()
    if(formFilled && isCoordChosen){
        isCoordChosen = false
        formFilled = false
        map.off('mouseover',mapOver)
        map.off('mousemove',mapMouseMove)
        coordsText.innerHTML = "Please chosse field location before submit"
        await cleanForm()
        document.body.style.cursor = "auto";
        fieldData.classList.toggle("collapse")
    }
})

function initForm(){
    Array.from(document.getElementsByClassName("field-data-input"))
    .forEach(element => {
        element.setAttribute("required","required")
    });
}

function cleanForm(){
    Array.from(document.getElementsByClassName("field-data-input"))
    .forEach(element => {
        element.removeAttribute("required")
        element.value = ""
    });
}

function isFormFilled(){
    let formFilled = true
    Array.from(document.getElementsByClassName("field-data-input"))
    .forEach(element => {
        if(element.tagName === 'INPUT'){
            if(element.value === ''){
                formFilled = false
            }
        }
    });
    document.getElementById('field-sport')
    return formFilled
}

let tempMarker
let mapElement = document.getElementById('map')
let coordsText = document.getElementsByClassName("field-data-coordinates")[0]
let coordsButton = document.getElementsByClassName("field-data-coordinates-button")[0]
let isAllowToAddField = false

coordsButton.addEventListener('click',()=>{
    let formFilled = isFormFilled() 
   if(formFilled){
    isAllowToAddField = true
    map.on('mouseover',mapOver)
   }
})

function mapOver(){
    document.body.style.cursor = "crosshair";
    map.on('mousemove',mapMouseMove)
}

function mapMouseMove(event){
    if(!isCoordChosen){
        coordsText.innerHTML = "Latitude: " + event.latlng.lat +"<br>Longitude : " + event.latlng.lng
    }
    map.once('click',(event)=>{
        addField(event)
    },{once:true})
}
let tt
 function addField(mapEvent){
    if(isAllowToAddField){
        var tempOptions = circleOptions;
        let isModalResponsed = false
        tempMarker = L.geoJSON(createFeature([mapEvent.latlng.lng,mapEvent.latlng.lat]),{
        attribution: '',
        interactive: true,  
        layerName: 'layersportData',
        pane: 'panesportData',
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {},
            };
            return L.circleMarker(latlng, tempOptions).on('click',notify);
        },}).addTo(map)
        addLayerPopup()
        activateModal(true, isModalResponsed)
        coordsText.innerHTML = "Latitude: " + mapEvent.latlng.lat +"<br>Longitude : " + mapEvent.latlng.lng
        isAllowToAddField = false
        isCoordChosen = true
        addMarker(tempMarker)
        // console.log(tempMarker._layers[tempMarker._leaflet_id - 1].feature)
        jsonSportAddedData.push(tempMarker._layers[tempMarker._leaflet_id - 1].feature)
        jsonSportAddedDataContainer.features = jsonSportAddedData
        updateLocalStorage()
    }
}

function addMarker(e){
    layersportData._layers[e._leaflet_id - 1] = e._layers[e._leaflet_id - 1]
}

function createFeature(coordinates){
    let elementsCollection = document.getElementsByClassName("field-data-input")
    var feature1 = {
        "type": "Feature",
        "properties": {
            "Field name": elementsCollection[0].value,
            "Popularity" : '',
            "Sport Type": document.getElementsByClassName('field-data-sport-select')[0].value,
            "City": elementsCollection[1].value,
            "Address": elementsCollection[2].value,
            "Number": elementsCollection[3].value
        },
        "geometry": {
            "type": "Point",
            "coordinates": coordinates
        }
    }
    
    return feature1
}

function addLayerPopup(){
    let popupString = ''
    Array.from(document.getElementsByClassName("field-data-input"))
    .forEach(element => {
        if(element.tagName === 'INPUT'){
            popupString += element.previousElementSibling.innerHTML + ': '
            popupString += element.value.toString() +'<br/>'
        }
    });
    let select = document.getElementsByClassName('field-data-sport-select')[0]
    popupString += select.previousElementSibling.innerHTML + ': '
    popupString += select.value + '<br/>'
    tempMarker.bindPopup(popupString)
}

function removeTempMarker(){
    tempMarker.remove()
    isAllowToAddField = true
    isCoordChosen = false
    map.on('mousemove',mapMouseMove)
}

let fieldEdit = document.getElementsByClassName('field-edit')[0]

let fieldEditExit = document.getElementsByClassName('field-edit-exit')[0]

fieldEditExit.addEventListener('click',()=>{
    fieldEdit.classList.toggle('collapse')
})

let fieldEditPopularResult = document.getElementsByClassName('field-edit-result')[0]
function updatePopularity(){
    let popularity = currentLayer.feature.properties.Popularity
    let backgroundColor
    if( popularity !== ''){
        switch(popularity){
            case 'Empty':
                backgroundColor = "green"
                currentLayer.setStyle({fillColor :'green'})
                break;
            case 'Populated':
                backgroundColor = "yellow"
                currentLayer.setStyle({fillColor :'yellow'})
                break;
            case 'Crowded':
            backgroundColor = "red"
            currentLayer.setStyle({fillColor :'red'})
            break;
        }
    }
    else{
        backgroundColor = "transparent"
    }
    fieldEditPopularResult.style.backgroundColor= backgroundColor

}

let fieldEditEmpty = document.getElementsByClassName('field-population-empty')[0]
let fieldEditPop = document.getElementsByClassName('field-population-pop')[0]
let fieldEditCrowded = document.getElementsByClassName('field-population-crowded')[0]

fieldEditEmpty.addEventListener('click',changePopulation)
fieldEditPop.addEventListener('click',changePopulation)
fieldEditCrowded.addEventListener('click',changePopulation)

function changePopulation(e){
    currentLayer.feature.properties.Popularity = e.srcElement.innerHTML
    updatePopularity()  
    jsonSportAddedDataContainer.features.forEach(elm=>{
        if(elm.properties['Field name'] === currentLayer.feature.properties['Field name']){
            elm.properties.Popularity = currentLayer.feature.properties.Popularity
        }
    })
    updateLocalStorage()
}

let fieldEditLikeButton = document.getElementsByClassName('field-like-button')[0]
let likedFieldsList = []
fieldEditLikeButton.addEventListener('click',(e)=>{
    if(!likedFieldsList.includes(currentLayer)){
        mapContainer.removeChild(likeList)
        likedFieldsList.push(currentLayer)
        let likedLine = document.createElement('div')
        likedLine.className = currentLayer.feature.properties['Field name']
        likedLine.style.fontWeight = "normal"
        likedLine.innerHTML += currentLayer.feature.properties['Field name'] + '<br/>'
        likeList.appendChild(likedLine)
        mapContainer.appendChild(likeList)
        currentLayer.setStyle({fillColor :'dodgerblue'})
    }
    else{
        let indexLayer = likedFieldsList.indexOf(currentLayer)
        likedFieldsList.splice(indexLayer, 1)
        let currentLikeDiv = document.getElementsByClassName(currentLayer.feature.properties['Field name'])[0]
        likeList.removeChild(currentLikeDiv)
        mapContainer.removeChild(likeList)
        mapContainer.appendChild(likeList)

        // document.body.removeChild(likeList)
        // document.body.appendChild(likeList)
        currentLayer.setStyle({fillColor :'rgba(232,113,141,1.0)'})
    }
})

let likesButton = document.getElementsByClassName('navbar-likes')[0]
likesButton.addEventListener('click',()=>{
    likeList.classList.toggle('collapse')
})

let likeList
createLikeList()
function createLikeList(){
    likeList = document.createElement('div')
    likeList.className = " navbar-like-list collapse"
    likeList.setAttribute('draggable','true')
    likeList.setAttribute('id','likeList')
    likeList.innerHTML = "Liked fields &#10084"
    likeList.addEventListener('mousedown',async (e)=>{
          dragElement(likeList);
        })
    mapContainer.appendChild(likeList)
    // document.body.appendChild(likeList)
}


setTimeout(()=>{
    L.Control.geocoder().addTo(map)
},2000)                                                                                                         