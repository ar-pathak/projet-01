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
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    }
});