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
function tag(tagName) {
 return document.getElementsByTagName(tagName);
}
function addClass(fromClass, addClass) {
 return queryAll(fromClass).forEach(function(element) {
    element.classList.add(addClass);
  	});
}
function removeClass(fromClass, removeClass) {
 return queryAll(fromClass).forEach(function(element) {
    element.classList.remove(removeClass);
  	});
}

// FILTER MENU on page products.html
function showFinishes() {
	removeClass(".options-sub", "show");
	removeClass(".details-nav-li", "active-li");
	id("finishes-menu").classList.add("active-li");
	id("finishes-box").classList.add("show");
}
showFinishes(); //start page with this selected
function showDetails() {
	removeClass(".options-sub", "show");
	removeClass(".details-nav-li", "active-li");
	id("details-menu").classList.add("active-li");
	id("details-box").classList.add("show");
}
function showDimensions() {
	removeClass(".options-sub", "show");
	removeClass(".details-nav-li", "active-li");
	id("dimensions-menu").classList.add("active-li");
	id("dimensions-box").classList.add("show");

}
function showBrochures() {
	removeClass(".options-sub", "show");
	removeClass(".details-nav-li", "active-li");
	id("brochures-menu").classList.add("active-li");
	id("brochures-box").classList.add("show");
}


// SLIDE SHOW on page details.html
var imgIndex = 0;
var imgArray = [
	"images/chair1.jpg",
	"images/chair2.jpg",
	"images/chair3.jpg",
	"images/chair4.jpg",
	"images/chair5.jpg"
];
var isActive = false;

//PRELOAD IMAGES

var images = new Array();
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
	  images[i] = new Image();
	  images[i].src = preload.arguments[i];
	}
}
preload (imgArray);

function moveThumbnails() {
	if (imgIndex === imgArray.length - 1) { // move the thumbnails effect
		query(".thumb-sub-cont").classList.add("thumb-sub-cont-move-l");
	}
	if (imgIndex < imgArray.length - 1) {
		query(".thumb-sub-cont").classList.remove("thumb-sub-cont-move-l");
	}
}
function removeAnim(){// allow css animations to finish then execute something
	query(".sub-container img").classList.remove("slide-left", "slide-right");
	isActive = false; // the animation is finished
}
function addRemove() {
	removeClass(".thumb-sub-cont img", "active-img"); // diselect active image
	query(".sub-container img").src = imgArray[imgIndex]; // change image
	queryAll(".thumb-sub-cont img")[imgIndex].classList.add("active-img"); // select active image
	} 
	addRemove();// start website with first image selected
function handleRanges() {
	if (imgIndex === imgArray.length) { // prevent going over the num of images
	  imgIndex = 0;
	} 
	if (imgIndex < 0) { // when index is 0 start from the end
		imgIndex = imgArray.length - 1; // because length starts from 1
	}
}
function arrowRight() {
	imgIndex++;
	handleRanges();
	addRemove();
	moveThumbnails();
	query(".sub-container img").classList.add("slide-right");
	query(".sub-container img").addEventListener("webkitAnimationEnd", removeAnim); // Code for Chrome, Safari and Opera
	query(".sub-container img").addEventListener("animationend", removeAnim); // Standard syntax
}
function arrowLeft() {
	imgIndex--;
	handleRanges();
	addRemove();
	moveThumbnails();
	query(".sub-container img").classList.add("slide-left");
	query(".sub-container img").addEventListener("webkitAnimationEnd", removeAnim);  // Code for Chrome, Safari and Opera
	query(".sub-container img").addEventListener("animationend", removeAnim); // Standard syntax
}
query(".arrow-right").addEventListener("click", function() {
  if (!isActive) { // if the animation is finished
    isActive = true; // set animation is active
    arrowRight();
  }
});
query(".arrow-left").addEventListener("click", function() {
  if (!isActive) {
    isActive = true;
    arrowLeft();
  }
});

// EVENT LISTENERS
id("finishes-menu").addEventListener("click", showFinishes);
id("details-menu").addEventListener("click", showDetails);
id("dimensions-menu").addEventListener("click", showDimensions);
id("brochures-menu").addEventListener("click", showBrochures);
