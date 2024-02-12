const menu = document.querySelector("#menu");

menu.addEventListener("click", e => {
    if (menu.classList.contains("open-menu")) {
        menu.classList.remove("open-menu");
    } else {
        menu.classList.add("open-menu")
    }
})