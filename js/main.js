// Menu Responsivo
const res_icon = document.querySelector("div#res_icon");
const menu_res = document.getElementById("menu_res");
let right_menu = menu_res.getBoundingClientRect().right;

function toggleRes(){
    if(menu_res.style.right === "0%")
        return "-100%";
    else
        return "0%";
}

res_icon.addEventListener("click", ()=> {
    res_icon.classList.toggle("active");
    menu_res.style.right = toggleRes();
});

// Submenu (Sites -> )
const btn_submenu = document.querySelector("span#btn_submenu");
const sub_menu = document.querySelector("div#sub_menu");

btn_submenu.addEventListener("click", ()=>{
    sub_menu.classList.toggle("active");
    let icon = btn_submenu.querySelector("i");
    icon.classList.toggle("fa-caret-down");
    icon.classList.toggle("fa-sort-up");
});

// Submenu Responsivo

const btn_res_submenu = document.querySelector("span#btn_res_submenu");
const ul_res = document.querySelector("ul.res_sublinks");
btn_res_submenu.addEventListener("click", ()=>{
    ul_res.classList.toggle("active");
});