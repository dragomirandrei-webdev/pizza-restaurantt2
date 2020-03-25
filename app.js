(function navbar() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    })
})();

(function teamHover() {
    const imgCtn = document.querySelector('.team__ctn');
    const hoverDiv = document.querySelector('.team__hover');
    let counter = 0;

    if (counter === 0) {
        imgCtn.onmouseover = function () {
            hoverDiv.style.display = 'block'
            counter++;
        }
    } else if (counter > 0) {
        imgCtn.onmouseover = function () {
            hoverDiv.style.display = 'none'
            counter--;
        }
    }
})();