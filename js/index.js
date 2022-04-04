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