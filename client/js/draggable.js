

fieldEdit.addEventListener('mousedown',async (e)=>{
  if(e.target.tagName === "FORM"){
    dragElement(fieldEdit);
  }
  })

fieldData.addEventListener('mousedown',async (e)=>{
  if(e.target.tagName === "FORM"){
    dragElement(fieldData);
  }
  })

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
   
    // if(dragFirstClick){
    //   dragMouseDown()
    //   dragFirstClick = false
    // }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    if(e.target.tagName === "INPUT"){
      elmnt.onmousedown = null;
    }
    
  }
}