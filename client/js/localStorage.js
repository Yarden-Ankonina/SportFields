
function updateLocalStorage(){
    if(window.localStorage.getItem !== null){
        localStorage.removeItem('layerSport')

    }
    window.localStorage.setItem('layerSport', JSON.stringify(jsonsportData))
}