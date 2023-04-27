export const cards = () => {
    const cardsParent = document.querySelector('.partners__cards');
    const cardsWrap = document.querySelector('.partners__cards-wrap');
    const cards = document.querySelectorAll('.partners__cards-item');
    const threshold = window.innerHeight * 0.8;

    window.addEventListener('scroll', () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < threshold) {
                card.classList.add('stacked');
            } else {
                card.classList.remove('stacked');
            }
        });

        cardsParent.style.height = cardsWrap.scrollHeight + 'px';
    });


};