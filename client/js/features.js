
let fieldData = document.getElementsByClassName("field-data")[0]
let newFieldDataExit = document.getElementsByClassName("field-data-exit")[0]
newFieldDataExit.addEventListener('click',()=>{
    fieldData.classList.toggle("collapse")
})

let newFieldDataButton = document.getElementById("navbar-new")
newFieldDataButton.addEventListener('click', ()=>{
    fieldData.classList.toggle("collapse")
    if(!fieldData.classList.contains("collapse")){
        isAllowToAddField = true
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
        // fieldData.submit()
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
    Array.from(fieldData.children).forEach(element => {
        if(element.tagName === 'INPUT'){
            if(element.value === ''){
                formFilled = false
            }
        }
    });
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
        let feature = createGeoJsonFeature([event.latlng.lng,event.latlng.lat])
        addField(event)
    },{once:true})
}

 function addField(mepEvent){
    if(isAllowToAddField){
        var tempOptions = circleOptions;
        tempOptions.fillColor = 'green';
        let isModalResponsed = false
        tempMarker = L.circleMarker([mepEvent.latlng.lat,mepEvent.latlng.lng], tempOptions).addTo(map)
        activateModal(true, isModalResponsed)
        coordsText.innerHTML = "Latitude: " + mepEvent.latlng.lat +"<br>Longitude : " + mepEvent.latlng.lng
        isAllowToAddField = false
        isCoordChosen = true
    }
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
