let collapsibleMenu = document.getElementsByClassName("collapsible-menu")[0]
let collapsibleItems = document.getElementsByClassName("collapsible-item")

collapsibleMenu.addEventListener('click',()=>{
    collapsibleMenu.classList.toggle("collapse")
    Array.from(collapsibleItems).forEach((item)=>{
            item.classList.toggle("collapse")
    })
})


