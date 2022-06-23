let navbarAbout = document.getElementsByClassName('navbar-about')[0]
let aboutString = `
The SportFields app has a geographical map interface to help you easily find available sports facilities to play various sports near you.<br/> 

Click on any existing field on the map, to see more about it: <br/>

•	See its location, size, operational status, contact person, and other details.<br/> 
•	See its current availability  for play, or report an update on its availability by selecting Crowded, Populated, or Empty.<br/>
•	Click on the ♥ icon to add the field to your favorite “liked” list and mark the field in blue on the map. <br/>
 
Click on the 'New Field' button to add new playing fields, sports grounds, pitches, swimming pools, etc. that are not on the map.<br/>

Click on the ‘Likes ♥’ button to see your selected list of liked fields.<br/>



Thank you for using SportFields. Have a great game!
`
navbarAbout.addEventListener('click',()=>{
    let aboutModal = createAboutModal("SportFields",aboutString)
    modal(aboutModal.id)
    
})

function createAboutModal(text,subText){
    let modalAbout = document.createElement('div')
    let subTextModal = document.createElement('div')
    subTextModal.innerHTML = subText
    modalAbout.className = "modal on modal-about"
    modalAbout.setAttribute('id','modalAbout')
    modalAbout.innerHTML = text + '<br><br>'
    modalAbout.style.fontWeight = 'bold'
    subTextModal.style.fontWeight = 'normal'
    subTextModal.style.textAlign = 'left'

    let reset = document.createElement('button')
    reset.innerHTML = 'Reset App'
    reset.style.margin = '0.2em'
    reset.addEventListener('click',()=>{
        localStorage.clear()
        window.location.reload()
    })
    modalAbout.appendChild(subTextModal)
    modalAbout.appendChild(reset)
    document.body.appendChild(modalAbout)
    return modalAbout
}