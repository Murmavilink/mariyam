export const burgerMenu = () => {
    const menu = document.querySelector('.menu');
    const burgerBtn = document.querySelector('.menu-burger');

    console.log(burgerBtn);

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('menu-burger--active');
        menu.classList.toggle('menu--active');
    });

    console.log('bbb');

};
