const openMenu=document.querySelector("#menu_open_button");
const closeMenu=document.querySelector("#menu_close_button")
openMenu.addEventListener("click",()=>{
    /*toggle the menu bar*/
    document.body.classList.toggle("show_menu_bar");
});
/*close menu when close menu click*/
closeMenu.addEventListener("click",()=>openMenu.click());