let navbarAbout = document.getElementsByClassName('navbar-about')[0]

navbarAbout.addEventListener('click',()=>{
    let aboutModal = createAboutModal("SportFields",
    "Sportfields is an app that helps you find sport fields with a map interface.<br/><br/>You can add new fields that are not on the map using the 'New Field' button.<br/>You can select fields and see their details,<br/>after a field is selected you can select how many people are there in the field.<br/>There are 3 levels of population : Crowded, Populated, Empty.<br/>You can add a field to your liked fields by pressing the heart icon.<br/>Press the 'Likes' button to see what fields you have in your liked list.<br/><br/>Thank you for using SportFields."
    )
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