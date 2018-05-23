// GLOBAL VARIABLES


// GLOBAL FUNCTIONS

// SHORTEN SELECTORS
function query(className) {
 return document.querySelector(className);
}
function queryAll(className) {
 return document.querySelectorAll(className);
}
function id(idName) {
 return document.getElementById(idName);
}
function addClass(fromClass, addClass) {
  queryAll("." + fromClass)[window.indexNumber].classList.add(addClass);
}
function removeClass(fromClass, removeClass) {//remove class from list
  queryAll("." + fromClass).forEach(function(element) {
    element.classList.remove(removeClass);
  });
}

//PRELOAD IMAGES
document.addEventListener("DOMContentLoaded", function(event) {
  var images = new Array();
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments[i];
    }
  }
  preload (
    "images/home.jpg",
	"images/home_armchairs.jpg",
	"images/home_carpets.jpg",
	"images/home_lounge_chairs.jpg",
	"images/home_low_tables.jpg",
	"images/home_sofas.jpg"
  );
});


// go to products if screen size < 1000px
function goToProducts() {
	if (screen.width <= 1000) {
		window.location.replace("http://www.slave-angelovski.com/furniture_site/products.html");
	}
}
goToProducts();
//functions for the hover on furniture effect
function armchairsEnter (){
	id("intro-img1").style.backgroundImage = "url('images/home_armchairs.jpg')"; 
	id("intro-img1").style.opacity = "1"; 
	id("armchairs-text").style.opacity = "1";
	id("tolltip-circle").classList.add("hide");
}
function carpetsEnter (){
	id("intro-img1").style.backgroundImage = "url('images/home_carpets.jpg')"; 
	id("intro-img1").style.opacity = "1"; 
	id("carpets-text").style.opacity = "1";
	id("tolltip-circle").classList.add("hide");
}
function lowTablesEnter (){
	id("intro-img1").style.backgroundImage = "url('images/home_low_tables.jpg')"; 
	id("intro-img1").style.opacity = "1"; 
	id("low-tables-text").style.opacity = "1";
	id("tolltip-circle").classList.add("hide");
}
function sofasEnter (){
	id("intro-img1").style.backgroundImage = "url('images/home_sofas.jpg')"; 
	id("intro-img1").style.opacity = "1"; 
	id("sofas-text").style.opacity = "1";
	id("tolltip-circle").classList.add("hide");
}
function loungeChairsEnter (){
	id("intro-img1").style.backgroundImage = "url('images/home_lounge_chairs.jpg')"; 
	id("intro-img1").style.opacity = "1";
	id("lounge-chairs-text").style.opacity = "1"; 
	id("tolltip-circle").classList.add("hide");
}
function mouseleave (){
	id("intro-img1").style.opacity = "0"; 
}


//EVENT LISTENERS
id("armchairs").addEventListener("mouseover", armchairsEnter);
id("carpets").addEventListener("mouseover", carpetsEnter);
id("low-tables").addEventListener("mouseover", lowTablesEnter);
id("sofas").addEventListener("mouseover", sofasEnter);
id("lounge-chairs").addEventListener("mouseover", loungeChairsEnter);
id("intro-container").addEventListener("mouseout", mouseleave);


