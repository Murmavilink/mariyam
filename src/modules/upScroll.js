export const upScroll = () => {
    const upBtn = document.querySelector('.btn-donation');

    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > 1000) {
            upBtn.classList.add('btn-donation--active');
        } else {
            upBtn.classList.remove('btn-donation--active');
        }
    });

};