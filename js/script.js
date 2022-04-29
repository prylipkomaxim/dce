"use strict"
// Определение устройства
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};
// type of device

if (isMobile.any()) {
    document.body.classList.toggle('_touch');
} else{
    document.body.classList.toggle('_pc');
}

//Burger

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (menuIcon) {
    menuIcon.addEventListener('click', function(e){
        document.body.classList.toggle('_lock')
        menuBody.classList.toggle('_active');
        menuIcon.classList.toggle('_active');
    })
    if(document.body.classList.contains('_touch')) {
        menuBody.addEventListener("click", function (e) {
            menuBody.classList.remove('_active');
            menuIcon.classList.remove('_active');
            document.body.classList.remove('_lock');
    })
}
}
const headerContact = document.querySelector('.header__contact');
const headerNav = document.querySelector('.header__nav')
window.addEventListener('resize', getScreenWidth)
function getScreenWidth(e){
    let widthScreen = document.documentElement.clientWidth;
    if (headerContact){
        if (widthScreen < 835) {
            menuBody.append(headerContact)
        } else{
            headerNav.append(headerContact)
        }
    }
}
getScreenWidth();
//info bloks move
const itemsBody = document.querySelectorAll('.whywe__items')
if (itemsBody.length > 0 ){
    for(let i = 0; i < itemsBody.length; i++){
    const eachItemBody = itemsBody[i];

    eachItemBody.addEventListener('click', function(e){
        eachItemBody.classList.toggle('_active');
        })
    }
};

new Swiper('.question__slider',{
    navigation:{
        nextEl:'.question__button_next',
        prevEl:'.question__button_back'
    },
    simulateTouch:true,
    touchRatio:1,
    spaceBetween:30,
    speed:800,
});

new Swiper('.catalog__slider',{
    spaceBetween:20,
    navigation:{
        nextEl:'.catalog__slider-next',
        prevEl:'.catalog__slider-prev'
    },
    mousewheel:true,
    breakpoints:{
        375:{
            slidesPerView:1.3,
        },
        480:{
            slidesPerView:1.5,
        },
        580:{
            slidesPerView:2,
        },
        600:{
            slidesPerView:2,
        },
        700:{
            slidesPerView:2.5,
        },
        850:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:3.5,
        },
        1200:{
            slidesPerView:4.2,
        }
    },
    loop:true,
    autoplay:{
        delay:1000,
        disableOnInteraction:true,
    },
});

new Swiper('.video__slider',{
    spaceBetween:20,
    navigation:{
        prevEl:'.video__slider-prev',
        nextEl:'.video__slider-next'
    },
    mousewheel:true,
    breakpoints:{
        375:{
            slidesPerView:1.3,
        },
        480:{
            slidesPerView:1.5,
        },
        580:{
            slidesPerView:2,
        },
        600:{
            slidesPerView:2,
        },
        700:{
            slidesPerView:2.5,
        },
        850:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:3.5,
        },
        1200:{
            slidesPerView:4,
        }
    },
    
});

function initMap() {
    const pos =  { lat: 49.3717037, lng: 35.4390939 };
    const map = new google.maps.Map(document.getElementById("map"), {
    center:pos,
    zoom: 8,
});
const marker = new google.maps.Marker({
    position: pos,
    map: map,
});

};



