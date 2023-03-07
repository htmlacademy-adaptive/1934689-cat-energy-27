const headerBtn = document.querySelector('.header__button');
const bodyMenu = document.querySelector('.page__body');
const headerNavDropDown = document.querySelector('.header__nav');

headerBtn.addEventListener('click', () => {
  const exp = "true" === headerBtn.getAttribute('aria-expanded')
  headerBtn.setAttribute('aria-expanded', !exp)


 headerBtn.classList.toggle('header__button--active')
 bodyMenu.classList.toggle('page__body--menu')
 headerNavDropDown.classList.toggle('header--drop-menu')

 exp ? headerBtn.setAttribute('aria-label', 'Открыть меню')
 : headerBtn.setAttribute('aria-label', 'Закрыть меню')});

document.addEventListener('DOMContentLoaded', function (Event) {

  const  menuNoJs = document.querySelector('.menu')
  const  headerButton = document.querySelector('.header__button')
  const  headerNoJs = document.querySelector('.header__nav')
  menuNoJs.classList.remove('menu--no-js'),
  headerButton.classList.remove('header__button--no-js')
  headerNoJs.classList.remove('header__nav--no-js')});

document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      headerNavDropDown.classList.remove('header--drop-menu');
      bodyMenu.classList.remove('page__body--menu')
      headerBtn.classList.remove('header__button--active')
    }
  }
  );

