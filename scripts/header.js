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
  queryAll(fromClass)[window.indexNumber].classList.add(addClass);
}
function removeClass(fromClass, removeClass) {//remove class from list
  queryAll(fromClass).forEach(function(element) {
    element.classList.remove(removeClass);
  });
}
function getOffsetTop(className) {
 return query(className).getBoundingClientRect().top + document.documentElement.scrollTop; // get element position relative to document
}
function openMobileMenu (){
	query(".header-container").id = "header-container";
}
function closeMobileMenu (){
	query(".header-container").id = "";
}
function searchOpen (){
	query(".nav-right").classList.add("search-input");
	id("form").classList.add("clicked");
	id("search").classList.add("hide");
}
function openSearchMenu() {// for the mobile version
	query(".nav-right").id = "search-menu-mobile";
}
function closeSearchMenu() {// for the mobile version
	query(".nav-right").id = "";
}
function scrollToTop() {// scroll to top on mobile bottom menu
	window.smoothScroll(0, 500)
}
function showMobileMenu() {//show mobile menu on scroll
	let scrollPosition = window.scrollY;
	if ((getOffsetTop(".header-container") < scrollPosition) && (window.innerWidth <= 1000)){
		query(".mobile-menu").classList.add("show"); // make filters menu fixed
	}
	else {
		query(".mobile-menu").classList.remove("show");
	}
}
function searchOpen(event){
	if (event.target.id.includes("search")) {
		query(".nav-right").classList.add("search-input");
		id("form").classList.add("clicked");
		id("search").classList.add("hide");
		id("search-input").focus();
		if (window.innerWidth >= 1000) {
			id("search-li").style.margin = "0 0.5vw 0 0";
		}
	}
}
function searchClose(event){
	query(".nav-right").classList.remove("search-input");
	id("form").classList.remove("clicked");
	id("search").classList.remove("hide");
	id("search-li").style.margin = "";
}
id("search").addEventListener("click", searchOpen); // close search field
id("search-input").addEventListener("blur", searchClose);
queryAll(".mobile-menu-icon").forEach(function(element) {// add click event to all menu icons
	element.addEventListener("click", openMobileMenu);
});
query(".close-button").addEventListener("click", closeMobileMenu);
query(".search-menu-mobile").addEventListener("click", openSearchMenu);
query(".close-search-button").addEventListener("click", closeSearchMenu);
query(".scroll-to-top").addEventListener("click", scrollToTop);
window.addEventListener("scroll", showMobileMenu)