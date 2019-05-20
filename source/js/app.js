
 //открытие-закрытие меню

 var menuSL = document.querySelector(".site-list");
 var menuUL = document.querySelector(".user-list");
 var toggle = document.querySelector(".main-nav__toggle");
 var nav = document.querySelector(".main-nav");


 toggle.classList.remove("main-nav__toggle--hide");
 nav.classList.remove("main-nav--opened");
 nav.classList.add("main-nav--closed");
 menuUL.classList.add("user-list--hide");
 menuSL.classList.add("site-list--hide");

 toggle.addEventListener("click", function(evt) {
   if (nav.classList.contains("main-nav--opened")) {
       evt.preventDefault();
       menuUL.classList.add("user-list--hide");
       menuSL.classList.add("site-list--hide");
       nav.classList.remove("main-nav--opened");
       nav.classList.add("main-nav--closed");
     } else {
       evt.preventDefault();
       menuUL.classList.remove("user-list--hide");
       menuSL.classList.remove("site-list--hide");
       nav.classList.add("main-nav--opened");
   }
  });

 //открытие-закрытие модалки
 var buttonOrder = document.querySelector(".js-order-button");
 var popup = document.querySelector(".banner");
 var modal = document.querySelector(".modal");
 buttonOrder.addEventListener("click", function(evt) {
   evt.preventDefault();
   popup.classList.add("banner--show");
 });

 //подумать какое событие??
 modal.addEventListener("mouseleave", function(evt) {
   evt.preventDefault();
   popup.classList.remove("banner--show");
 });

 window.addEventListener("keydown", function(evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (popup.classList.contains("banner--show")) {
       popup.classList.remove("banner--show");
     }
   }
 });
