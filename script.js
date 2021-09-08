"use strict";

///// Hamburger nav:

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}

///////////////////////////////////////
// Slider
const slider = function () {
	const slides = document.querySelectorAll(".slide-mobile");
	const btnLeft = document.querySelector(".slider-mobile__btn--left");
	const btnRight = document.querySelector(".slider-mobile__btn--right");

	let curSlide = 0;
	const maxSlide = slides.length;

	// Functions

	const goToSlide = function (slide) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
		);
	};

	// Next slide
	const nextSlide = function () {
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		goToSlide(curSlide);
	};

	const prevSlide = function () {
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
	};

	const init = function () {
		goToSlide(0);
	};
	init();

	// Event handlers
	btnRight.addEventListener("click", nextSlide);
	btnLeft.addEventListener("click", prevSlide);

	document.addEventListener("keydown", function (e) {
		if (e.key === "ArrowLeft") prevSlide();
		e.key === "ArrowRight" && nextSlide();
	});
};
slider();

///////////////////////////////////////
