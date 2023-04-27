import Swiper from 'swiper/bundle';

export const slider = () => {

    const swiper = new Swiper('.stars__slider', {
        loop: true,
        speed: 3000,

        spaceBetween: 50,
        autoplay: {
            delay: 1000,
        },

        slidesPerView: 3.5,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
			1024: {
			  slidesPerView: 3.5,
			  spaceBetween: 20,
			},
			
            540: {
			  slidesPerView: 2,
			},

			320: {
			  slidesPerView: 1,
			},
		}
    });

};