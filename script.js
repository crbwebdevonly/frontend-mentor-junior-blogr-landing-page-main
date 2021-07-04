const barsMenu = document.querySelector(".menu-bars");
const navMenu = document.getElementById("menu-ID");
const menuClose = document.getElementById("menu-close");
const threeBars = document.getElementById("three-bars");
console.log(barsMenu, navMenu, menuClose, threeBars);

barsMenu.addEventListener("click", () => {
     console.log("clicked");
     navMenu.classList.toggle("hide");
     threeBars.classList.toggle("hide");
     menuClose.classList.toggle("hide");
});

window.addEventListener("resize", () => {
     console.log(window.innerWidth);
     if (window.innerWidth > 768) {
          navMenu.className = "menu show desktop";
          menuClose.className = "fas fa-times hide";
          threeBars.className = "bars";
     }

     if (window.innerWidth < 768) {
          navMenu.className = "menu show hide";
          menuClose.className = "fas fa-times hide";
          threeBars.className = "bars";
     }
});
