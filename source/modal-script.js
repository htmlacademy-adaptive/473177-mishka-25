let modalClose = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');
let buttonOrder = document.querySelector('.button-order');
let productOrder = document.querySelector('.product-card__cart-link');

modalClose.addEventListener('click', function () {
  modal.classList.remove('modal--open');
  modal.classList.add('modal--close');
});

buttonOrder.addEventListener('click', function () {
  modal.classList.add('modal--open');
  modal.classList.remove('modal--close');
})

productOrder.addEventListener('click', function () {
  modal.classList.add('modal--open');
  modal.classList.remove('modal--close');
})
