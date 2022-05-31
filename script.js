// FONCTIONNALITE 1
//
function click_on_footer() {
	const footer = document.getElementsByTagName("footer")[0];
	footer.addEventListener("click", function () {
		console.log("coucou");
	});
}
click_on_footer();

// FONCTIONNALITE 1 BIS
//
function click_on_footer_bis() {
	const footer = document.getElementsByTagName("footer")[0];
	let i = 0;
	footer.addEventListener("click", function () {
		console.log(i++);
	});
}
click_on_footer_bis();

// FONCTIONNALITE 2
//
function burger_move() {
	const burger_menu = document.getElementsByClassName("navbar-toggler")[0];
	const layer = document.getElementById("navbarHeader");

	burger_menu.addEventListener("click", function () {
		layer.classList.toggle("collapse");
	});
}
burger_move();

// FONCTIONNALITE 3
//
function color_red() {
	const editBtn = document.querySelectorAll(
		"div > button.btn-sm.btn-outline-secondary"
	)[0];
	const card = document.querySelectorAll("div.card")[0];
	editBtn.addEventListener("click", function () {
		card.style.backgroundColor = "red";
	});
}
color_red();

// FONCTIONNALITE 4
//

function color_green() {
	const editBtn = document.querySelectorAll(
		"div > button.btn-sm.btn-outline-secondary"
	)[1];
	const card = document.querySelectorAll("div.card")[1];
	editBtn.addEventListener("click", function () {
		card.classList.toggle("bg-green");
	});
}
color_green();

// FONCTIONNALITE 5
//
function nuclear() {
	const navbar = document.getElementsByTagName("header")[0];
	const bootstrap_link = document.getElementsByTagName("link")[0];
	navbar.addEventListener("dblclick", function () {
		if (document.body.contains(bootstrap_link)) {
			document.body.removeChild(bootstrap_link);
		} else {
			document.body.appendChild(bootstrap_link);
		}
	});
}
nuclear();

// FONCTIONNALITE 6
//
function reduct() {
	const viewBtn = document.querySelectorAll(
		"div > button.btn.btn-sm.btn-success"
	);
	const textCard = document.querySelectorAll("p.card-text");
	const imgCard = document.querySelectorAll("img.card-img-top");

	for (let i = 0; i < viewBtn.length; i++) {
		viewBtn[i].addEventListener("mouseover", function () {
			textCard[i].classList.toggle("hide-element");
			imgCard[i].classList.toggle("reduct-size");
		});
	}
}
reduct();

// FONCTIONNALITE 7
//
function slider() {
	let arrow = document.querySelector("a.btn-secondary");

	arrow.addEventListener("click", function () {
		let card = document.querySelectorAll("div.row")[1];
		let first = card.firstElementChild;
		let last = card.lastElementChild;

		card.insertBefore(last, first);
	});
	color_red();
}
slider();

// FONCTIONNALITE 8
//
function slider1() {
	let arrow = document.querySelector("a.btn-primary");

	arrow.addEventListener("click", function (link_event) {
		link_event.preventDefault();

		let card = document.querySelectorAll("div.row")[1];
		let first = card.firstElementChild;
		let last = card.lastElementChild;

		card.insertBefore(first, last);
	});
}
slider1();

// FONCTIONNALITE 9
//
function hanneton() {
	const logo_text =
		document.querySelector("a.navbar-brand").children[1].textContent;
	const body = document.getElementsByTagName("body")[0];

	document.addEventListener("keydown", (event) => {
		if (window.getSelection().anchorNode.textContent === logo_text) {
			const touche = event.key;
			if (touche === "a") {
				body.classList.add("col-4");
				body.classList.remove("offset-md-4", "offset-md-8");
			} else if (touche === "y") {
				body.classList.add("offset-md-4", "col-4");
				body.classList.remove("offset-md-8");
			} else if (touche === "p") {
				body.classList.add("offset-md-8", "col-4");
				body.classList.remove("offset-md-4");
			} else if (touche === "b") {
				body.classList.remove("col-4", "offset-md-4", "offset-md-8");
			} else {
				alert("essaye une autre touche : a ou y ou p ou b");
			}
		}
	});
}
hanneton();
