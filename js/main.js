const buttonOpenMenu = document.querySelector('.buttonOpenMenu')

const menu = document.querySelector('.menu-list')

buttonOpenMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})
