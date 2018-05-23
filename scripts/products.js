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
function getOffsetTop(className) {
 return query(className).getBoundingClientRect().top + document.documentElement.scrollTop; // get element position relative to document
}

// FILTER MENU
function showCategory() {
	id("category-sub").classList.add("show");
	id("category").classList.add("active-submenu");
	id("category").innerHTML = "CATEGORY ▼";
}
function showColor() {
	id("color-sub").classList.add("show");
	id("color").classList.add("active-submenu");
	id("color").innerHTML = "COLOR ▼";
}
function showMaterial() {
	id("material-sub").classList.add("show");
	id("material").classList.add("active-submenu");
	id("material").innerHTML = "MATERIAL ▼";
}
function showWood() {
	id("wood-sub").classList.add("show");
	id("wood").classList.add("active-submenu");
	id("wood").innerHTML = "WOOD ▼";
}
function showSortBy() {
	id("sort-sub").classList.add("show");
	id("sort-by").classList.add("active-submenu");
	id("sort-by").innerHTML = "SORT BY ▼";
}
function showRangeSlider() {
	id("price-slider-sub").classList.add("show");
	id("price-range").classList.add("active-submenu");
	id("price-range").innerHTML = "PRICE RANGE ▼";
}
function closeSubFilterMenu() {
	removeClass(".sub-filter", "show");
}
function filterMenu(event) { // set fixed top menu on scroll mobile
	let scrollPosition = window.scrollY;
	if (getOffsetTop(".filter-container") < scrollPosition){
		query(".filter-header-mobile").classList.add("fixed-filter-header"); // make filters menu fixed
	}
	else {
		query(".filter-header-mobile").classList.remove("fixed-filter-header");
	}
}
function openFilterMenu() {
	query(".filter-container").id = "filter-container";
}
function closeFilterMenu() {
	query(".filter-container").id = "";
}
function subFilterMenuHandler(event) {

	//add color filter
	let colorBox = queryAll(".color-box");
	colorBox = [...colorBox];
	
	for (let i = 0; i < colorBox.length; i++) {
		if (colorBox[i] === event.target) {
			queryAll(".color-box")[i].classList.toggle("selected-color-box");
		}

	}

	// go back if button is pressed
	let closeButton = queryAll(".back-button");
	closeButton = [...closeButton];
	for (let i = 0; i < closeButton.length; i++) {
		if (event.target.className == queryAll(".back-button")[i].className) {
		closeSubFilterMenu ();
		}
	}
	
	// console.log(query(".back-button").className);
	let filterDivs = queryAll(".sub-filter");
	filterDivs = [...filterDivs];

	// is the target one of the divs
	if (filterDivs.includes(event.target)) {
		return;
	}
	// is the target a child of one of the divs
	for (let i = 0; i < filterDivs.length; i++) {
		if (filterDivs[i].contains(event.target)) {
			return;
		}
	}
	// None of the above checks returned true
	// close the filter.
	id("category-sub").classList.remove("show");
	id("category").classList.remove("active-submenu");
	id("category").innerHTML = "CATEGORY ◀";
	id("color-sub").classList.remove("show");
	id("color").classList.remove("active-submenu");
	id("color").innerHTML = "COLOR ◀";
	id("material-sub").classList.remove("show");
	id("material").classList.remove("active-submenu");
	id("material").innerHTML = "MATERIAL ◀";
	id("wood-sub").classList.remove("show");
	id("wood").classList.remove("active-submenu");
	id("wood").innerHTML = "WOOD ◀";
	id("sort-sub").classList.remove("show");
	id("sort-by").classList.remove("active-submenu");
	id("sort-by").innerHTML = "SORT BY ◀";
	id("price-slider-sub").classList.remove("show");
	id("price-range").classList.remove("active-submenu");
	id("price-range").innerHTML = "PRICE RANGE ◀";
}

// EVENT LISTENERS
id("category").addEventListener("click", showCategory);
id("color").addEventListener("click", showColor);
id("material").addEventListener("click", showMaterial);
id("wood").addEventListener("click", showWood);
id("sort-by").addEventListener("click", showSortBy);
id("price-range").addEventListener("click", showRangeSlider);
id("filter-close-btn").addEventListener("click", closeFilterMenu);
query(".close-button").addEventListener("click", closeSubFilterMenu);
query(".fliter-btn").addEventListener("click", openFilterMenu);
window.addEventListener("click", subFilterMenuHandler, true);
window.addEventListener("scroll", filterMenu);// make filter menu fixed

// THE SLIDER PLUGIN
function rangeSlider() {
	let nonLinearSlider = id('slider-container');
	noUiSlider.create(nonLinearSlider, {
		connect: true,
		behaviour: 'tap',
		start: [ 250, 2500 ],
		range: {
			// Starting at 500, step the value by 500,
			// until 4000 is reached. From there, step by 1000.
			'min': [ 0 ],
			"1" : [50, 50],
			'30%': [ 500, 500 ],
			'50%': [ 4000, 1000 ],
			'max': [ 10000 ]
		}
	});
	let nodes = [
		id('lower-value'), // 0
		id('upper-value')  // 1
	];
	// Display the slider value and how far the handle moved
	// from the left edge of the slider.
	nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap,) {
		nodes[handle].innerHTML = values[handle];
	});
}
rangeSlider();// initialise rangeSlider function