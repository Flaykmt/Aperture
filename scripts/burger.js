const btnBurger = document.querySelector('.burger');
const listBurger = document.querySelector('#burger-list');

btnBurger.addEventListener('click', function () {
  listBurger.classList.toggle('active')
})
