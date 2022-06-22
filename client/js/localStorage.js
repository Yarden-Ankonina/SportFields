
function updateLocalStorage(){
    if(window.localStorage.getItem('sportAddedData') !== null){
        localStorage.removeItem('sportAddedData')
    }
    window.localStorage.setItem('sportAddedData', JSON.stringify(jsonSportAddedDataContainer))
}