export const reviews = () => {
    const itemsWrap = document.querySelector('.stories__items');
    const items = document.querySelectorAll('.stories__content-item');


    const removeClass = () => {
        items.forEach(item => {
            item.classList.remove('stories__content-item--active');
        });
    };

    const addClass = (id) => {
        const content = document.getElementById(id);

        content.classList.add('stories__content-item--active');
    };
    

    itemsWrap.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.stories__item')) {
            e.target.classList.add('stories__item--active');
            removeClass();
            addClass(e.target.dataset.item);
        }
    }, true);


    itemsWrap.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.stories__item')) {
            e.target.classList.remove('stories__item--active');
        }
    }, true);
};