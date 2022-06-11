let fieldData = document.getElementsByClassName("field-data")[0]
let newFieldDataExit = document.getElementsByClassName("field-data-exit")[0]
newFieldDataExit.addEventListener('click',()=>{
    fieldData.classList.toggle("collapse")
})

let newFieldDataButton = document.getElementById("navbar-new")
newFieldDataButton.addEventListener('click', ()=>{
    fieldData.classList.toggle("collapse")
})

