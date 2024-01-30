let menu = document.querySelector(".menu")
let sidebar = document.querySelector(".sidenavbar")
let vid_container = document.querySelector(".container")

    menu.onclick = function(){
        sidebar.classList.toggle("smallbar");
        vid_container.classList.toggle(".large-container")
    }