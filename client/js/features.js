
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
    }
})

let isCoordChosen = false
let fieldDataSubmit = document.getElementsByClassName("field-data-submit")[0]

fieldDataSubmit.addEventListener('click',()=>{
let formFilled = isFormFilled()
    if(formFilled && isCoordChosen){
        fieldData.classList.toggle("collapse")
    }
})

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

let tempMarker;
let mapElement = document.getElementById('map')
let coordsText = document.getElementsByClassName("field-data-coordinates")[0]
let coordsButton = document.getElementsByClassName("field-data-coordinates-button")[0]
let isAllowToAddField = false
coordsButton.addEventListener('click',()=>{
    let formFilled = isFormFilled() 
   if(formFilled){
    map.on('mouseover',()=>{
        document.body.style.cursor = "crosshair";
        map.on('mousemove',(event)=>{
            coordsText.innerHTML = "Latitude: " + event.latlng.lat +"<br>Longitude : " + event.latlng.lng
            map.on('click',(event)=>{
                let feature = createGeoJsonFeature([event.latlng.lng,event.latlng.lat])
                addField(event)
            },{once:true})
        })
        mapElement.style.cursor = 'crosshair';
    })

   }
})



function addField(mepEvent){
    if(isAllowToAddField){
        var tempOptions = circleOptions;
        tempOptions.fillColor = 'green';
        let tempMarker = L.circleMarker([mepEvent.latlng.lat,mepEvent.latlng.lng], tempOptions).addTo(map)
        activateModal(true)
        isAllowToAddField = false
        isCoordChosen = true
    }
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