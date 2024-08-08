window.onload =function(){
    const mainMenu = document.querySelector(".subHover");
    const subMenu = document.querySelector(".header-submenu");
    mainMenu.addEventListener("click", function(){
        subMenu.classList.toggle("hovering")
    });
}