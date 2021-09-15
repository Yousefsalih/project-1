const mainMenu = document.querySelector('.main-menu');
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', function open() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.style.transition = "all 1s"
});
closeMenu.addEventListener('click', function close() {
    mainMenu.style.top = '-110%';
});
