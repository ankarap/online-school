const icon = document.querySelector('.header__icon');
const menu = document.querySelector('.header__menu')
if (icon) {
	icon.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		icon.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}
/*-------------------------*/
function viewDiv() {
	document.querySelector(".learn__block-none").style.display = "block";
};
/*-----------------------*/
ScrollReveal({
	resert: true,
	distance: '20px',
	duration: 2500,
	delay: 200,
});
ScrollReveal().reveal('.cover__background', { delay: 500 });
ScrollReveal().reveal('.cover__title, .header-block__title, .header-block__subtitle', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.cover__subtitle,.cover__form, .cover__text, .cover__choose, .app__body', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.column-info__item', { delay: 600, origin: 'left', inteval: 400 });
ScrollReveal().reveal('.parcing__column, .column-footer__item', { delay: 650, origin: 'bottom', interval: 700 });
ScrollReveal().reveal('.webinar__body', { delay: 650, origin: 'right' });
ScrollReveal().reveal('.app__cover', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.learn__body, learn__open-block', { delay: 500, origin: 'bottom' });


