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
function selectBoxCountry() {
	var denmark = [
	"COPENHAGEN",
	"ODENSE",
	"AARHUS",
	"ESBJERG"
	];
	var norway = [
		"OSLO",
		"BERGEN",
		"STAVANGER",
		"TROMSØ"
	];
	var sweden = [
		"STOCKHOLM",
		"GOTHENBURG",
		"MALMO",
		"UPPSALA"
	];
	var england = [
		"LONDON",
		"BIRMINGHAM",
		"LEEDS",
		"GLASGOW"
	];
	if (id("country").selectedIndex === 1) {
		id("city").disabled = false;
		for (let i = 1; i < denmark.length; i++) {
			queryAll(".select-box")[1].options[i].innerHTML = denmark[i-1];
		}
	}
	if (id("country").selectedIndex === 2) {
		id("city").disabled = false;
		for (let i = 1; i < norway.length; i++) {
			queryAll(".select-box")[1].options[i].innerHTML = norway[i-1];
		}
	}
	if (id("country").selectedIndex === 3) {
		id("city").disabled = false;
		for (let i = 1; i < sweden.length; i++) {
			queryAll(".select-box")[1].options[i].innerHTML = sweden[i-1];
		}
	}
	if (id("country").selectedIndex === 4) {
		id("city").disabled = false;
		for (let i = 1; i < england.length; i++) {
			queryAll(".select-box")[1].options[i].innerHTML = england[i-1];
		}
	}
	if (id("country").selectedIndex < 1) {
		id("city").disabled = true;
	}
}
function selectBoxCity() {
	if (id("city").selectedIndex === 1) {
		removeClass(".stores-container .store-text", "show");
		addClass(".stores-container > div", "show");
	}
	if (id("city").selectedIndex === 2) {
		removeClass(".stores-container .store-text", "show");
		addClass(".stores-container .store-text:nth-of-type(2n+1)", "show");
	}
	if (id("city").selectedIndex === 3) {
		removeClass(".stores-container .store-text", "show");
		addClass(".stores-container div:nth-of-type(3)", "show");
	}
	if (id("city").selectedIndex === 4) {
		removeClass(".stores-container .store-text", "show");
		addClass(".stores-container div:nth-of-type(4)", "show");
	}
	if (id("city").selectedIndex < 1) {

		removeClass(".stores-container .store-text", "show");
	}
}

// EVENT LISTENERS
id("country").addEventListener("change", selectBoxCountry);
id("city").addEventListener("change", selectBoxCity);


//I am working on a custom function to replace original select tags with their option tags with a custom solution

// function replaceSelectBox (){ //detect default select boxes and replace them with custom ones
// 	let selectRootDiv = query(".s-box");// select the div containing the form tag with the select boxes
// 	let selectSelectBox = tag("select");
// 	function hideForm (){ //hide the original form tag
// 		for (let i = 0; i < tag("form").length; i++) {
// 		tag("form")[i].style.display = "none";
// 		}
// 	}
// 	function createBox () { //create the custom select box structure
// 		for (let i = 0; i < selectSelectBox.length; i++) {
// 			// debugger;
// 			let getSelectName = selectSelectBox[i].getAttribute("name"); //get the name attribute from the select tag
// 			selectRootDiv.innerHTML += '<div class="select-box-clone">'+ getSelectName + '</div>'; //create divs's, add the class and name from the select tag
// 			queryAll(".s-box .select-box-clone")[i].innerHTML += '<ul class="select-box-ul"></ul>'; //create ul's = to the number of select tags
// 			queryAll(".s-box .select-box-clone")[i].addEventListener("click", function(event) {
// 				if (event.target.className.includes("select-box-clone")) {
// 					queryAll(".s-box .select-box-clone")[i].classList.add("select-box-clone-open");
// 				}
// 				if (event.target.className.includes("box-li")) {
// 					queryAll(".select-box-clone")[i].firstChild.data = event.target.textContent;
//  				}
//  				if (!event.target.className.includes("select-box-clone")) {
// 					queryAll(".s-box .select-box-clone")[i].classList.toggle("select-box-clone-open");
// 				}
// 			}, true);
// 			for (let a = 0; a < selectSelectBox[i].length; a++) {
// 				let selectOptions = selectSelectBox[i].children[a].text;  //get the names of the options list
// 				queryAll(".s-box ul")[i].innerHTML += '<li class="box-li">' + selectOptions + '</li>'; // create li's add the class and name from the options tag
// 			}
// 		}
// 	}
// 	hideForm (); //see line 36
// 	createBox (); //see line 41
// }
// replaceSelectBox ();
// function isClickedOutside (event){
// 	if (!event.target.className.includes("select-box-clone", "box-li")) {
// 		queryAll(".s-box .select-box-clone").forEach(function(element) {
//     		element.classList.remove("select-box-clone-open");
//   		});
// 	}
// }
// //EVENT LISTENERS
// document.addEventListener("click", isClickedOutside);