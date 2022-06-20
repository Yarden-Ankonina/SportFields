function modal(id)
{
    let close = document.createElement("span");
    close.className = "modal-js-close";
    close.innerHTML = "x";
    close.addEventListener('click', exitModal)
    let el = document.getElementById(id);  // can also use a query selector
    el.appendChild(close);
    let body = document.querySelector("body");
    let bg = document.createElement("div");
    bg.className = "modal-js-overlay";
    el.setAttribute('bg', 'modal-js-overlay')
    
    body.appendChild(bg);
}

function modaloff(id) {
    let body = document.querySelector("body");
    let el = document.querySelector(id);
    let overlay = body.querySelector(".modal-js-overlay");

    el.classList.remove('on');
    body.removeChild(overlay);
}

function exitModal(){
    let overlay = document.body.querySelector(".modal-js-overlay");
    let closebtn = document.querySelector(".modal-js-close");
    let el = closebtn.parentElement;
    document.body.removeChild(overlay);

    el.classList.remove('on');
    el.removeChild(closebtn);
    document.body.removeChild(el)
    document.body.style.cursor ='pointer'
}

function createModal(text, isModalResponsed){
    let isCoordFinal;
    let modalPop = document.createElement('div')
    modalPop.className = "modal on"
    modalPop.setAttribute('id','modalPop')
    modalPop.innerHTML = text + '<br><br>'
    let buttonYes = document.createElement('button')
    let buttonNo = document.createElement('button')
    buttonYes.setAttribute('class','modal-button-yes')
    buttonYes.innerHTML = 'Yes'
    buttonYes.style.backgroundColor = 'springgreen'
    buttonYes.style.marginRight = '0.5em'
    buttonNo.setAttribute('class','modal-button-no')
    buttonNo.innerHTML = 'No'
    buttonNo.style.backgroundColor = 'crimson'

    modalPop.appendChild(buttonYes)
    modalPop.appendChild(buttonNo)
    document.body.appendChild(modalPop)

    buttonYes.addEventListener('click',()=>{
        isCoordFinal = true;
        isModalResponsed = true
        exitModal()
    })

    buttonNo.addEventListener('click',()=>{
        isModalResponsed = true
        isCoordFinal = false;
        removeTempMarker()
        exitModal()
    })

    return modalPop
}

function activateModal(turnOnModal, isModalResponsed){
    if(turnOnModal){
        let modalCoord = createModal("Are you sure this is the location?", isModalResponsed)
        modal(modalCoord.id)
    }
}