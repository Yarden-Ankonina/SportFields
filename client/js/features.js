
let fieldData = document.getElementsByClassName("field-data")[0]
let newFieldDataExit = document.getElementsByClassName("field-data-exit")[0]
newFieldDataExit.addEventListener('click',()=>{
    fieldData.classList.toggle("collapse")
})

let newFieldDataButton = document.getElementById("navbar-new")
newFieldDataButton.addEventListener('click', ()=>{
    fieldData.classList.toggle("collapse")
})

let fieldDataSubmit = document.getElementsByClassName("field-data-submit")[0]
fieldDataSubmit.addEventListener('click',()=>{
    fieldData.classList.toggle("collapse")
})

let mapElement = document.getElementById(map)
let coordsText = document.getElementsByClassName("field-data-coordinates")[0]
let coordsButton = document.getElementsByClassName("field-data-coordinates-button")[0]
coordsButton.addEventListener('click',()=>{
    coordsText.innerHTML = map.getCenter()
})


