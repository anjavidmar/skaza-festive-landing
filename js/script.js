var h = window.innerHeight;
var w = window.innerWidth;

console.log('screen height = ' + h, 'screen width = ' + w);

var site = document.querySelector('.site');
var site_h = site.offsetHeight;
var site_w = site.offsetWidth;

console.log('site height = ', site_h, ', site width = ', site_w);

var header = document.getElementById('header');
var header_h = header.offsetHeight;
var header_w = header.offsetWidth;
var background_image = document.getElementsByClassName('background-image');
var bannerContainer = document.getElementById('banner-container');
var bannerContainer_h = bannerContainer.offsetHeight;
var bannerContainer_w = bannerContainer.offsetWidth;
var floor = document.getElementsByClassName('floor');
var floor_h = bannerContainer_h * 0.321;

floor[0].style.height = floor_h + 'px';

if (header_w > header_h * 1.5) {
    background_image[0].classList.remove('mobile');
    background_image[0].classList.add('desktop');
} else {
    background_image[0].classList.add('mobile');
    background_image[0].classList.remove('desktop');
}

if (bannerContainer_w > 840) {
    bannerContainer.classList.remove('mobile');
    bannerContainer.classList.add('desktop');
} else {
    bannerContainer.classList.add('mobile');
    bannerContainer.classList.remove('desktop');
}

function screenResize() {
    console.log('screen resized');

    h = window.innerHeight;
    w = window.innerWidth;

    console.log('screen height = ' + h, 'screen width = ' + w);

    site_h = site.offsetHeight;
    site_w = site.offsetWidth;

    console.log('site height = ', site_h, ', site width = ', site_w);

    header_h = header.offsetHeight;
    header_w = header.offsetWidth;
    bannerContainer_h = bannerContainer.offsetHeight;
    bannerContainer_w = bannerContainer.offsetWidth;
    floor_h = bannerContainer_h * 0.321;

    floor[0].style.height = floor_h + 'px';

    if (header_w > header_h * 1.5) {
        background_image[0].classList.remove('mobile');
        background_image[0].classList.add('desktop');
    } else {
        background_image[0].classList.add('mobile');
        background_image[0].classList.remove('desktop');
    }

    if (bannerContainer_w > 840) {
        bannerContainer.classList.remove('mobile');
        bannerContainer.classList.add('desktop');
    } else {
        bannerContainer.classList.add('mobile');
        bannerContainer.classList.remove('desktop');
    }
}