
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
    console.log("mouseover")
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
 function addField(mepEvent){
    if(isAllowToAddField){
        var tempOptions = circleOptions;
        // tempOptions.fillColor = 'green';
        let isModalResponsed = false
        // tempMarker = L.circleMarker([mepEvent.latlng.lat,mepEvent.latlng.lng], tempOptions).on('click',aa).addTo(map)
        tempMarker = L.geoJSON(createFeature([mepEvent.latlng.lng,mepEvent.latlng.lat]),{
        attribution: '',
        interactive: true,  
        layerName: 'layersportData',
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {},
            };
            return L.circleMarker(latlng, tempOptions).on('click',notify);
        },}).addTo(map)
        addLayerPopup()
        activateModal(true, isModalResponsed)
        coordsText.innerHTML = "Latitude: " + mepEvent.latlng.lat +"<br>Longitude : " + mepEvent.latlng.lng
        isAllowToAddField = false
        isCoordChosen = true
    }
}


function createFeature(coordinates){
    let elementsCollection = document.getElementsByClassName("field-data-input")
    var feature1 = {
        "type": "Feature",
        "properties": {
            "Field name": elementsCollection[0].value,
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
    console.log('removeTempMarker')
    tempMarker.remove()
    isAllowToAddField = true
    isCoordChosen = false
    map.on('mousemove',mapMouseMove)
}


        // if(alert("Is this the new location? <br>yes/no")==='yes'){
        //     isAllowToAddField = false
        //     isCoordChosen = true
        // }
        // else{
        //     map.removeLayer(tempMarker)
        // }



 // let center = map.getCenter()
    // var myIcon = L.icon({iconUrl : "https://img.icons8.com/ios-filled/344/marker.png",iconSize: [45, 45]})
    // tempMarker = L.marker([center.lat, center.lng],{icon:myIcon}).addTo(map)
    setTimeout(()=>{
        L.Control.geocoder().addTo(map)
    },2000)                                                                                                         