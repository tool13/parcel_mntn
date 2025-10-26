const cloudsBg = document.querySelector('.backgrounds__clouds');
const humanBg = document.querySelector('.backgrounds__human');

window.onscroll = function() {
    cloudsBg.style.cssText = `transform: translateY(${-Math.ceil(pageYOffset/3)}px);`;
    humanBg.style.cssText = `transform: translate(${-Math.ceil(pageYOffset/10)}px, ${Math.ceil(pageYOffset/4)}px);`;
}