((d)=>{
    const $navBarMenu = d.querySelector(".nav-bar-menu"),
     $menuIcons = d.querySelector(".container-menu-icon"),
     $modal = d.querySelector(".modal");

    $menuIcons.addEventListener("click", (e)=>{
        $menuIcons.firstElementChild.classList.toggle("none");
        $menuIcons.lastElementChild.classList.toggle("none");
        $navBarMenu.classList.toggle("is-active");
        $modal.classList.toggle("modal-none");
        
    });





})(document);