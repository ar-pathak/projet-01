// TYPED JS

let typed = new Typed('#text', {
    strings: ["NFTs", "Arts", "Music"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


//BRAND SLIDER JS

let swiper = new Swiper('.brandSwiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 3,
        },
    }
});

// SHOW MENU JS

const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.menu');

bars.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});