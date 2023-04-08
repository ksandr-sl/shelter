const slides = document.getElementById('slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function slide(items, prev, next) {
    const slides = items.children;
    const slideSize = items.children[0].offsetWidth;
    const slidesLength = slides.length;
    let marginLeftRight = parseInt(window.getComputedStyle(items.children[0]).margin.split(' ')[1]) * 2;
    let posInitial;
    let index = 0;

    //set initial position
    items.style.left = -(slidesLength * (slideSize + marginLeftRight)) + 'px';

    //clone and paste slides to the end of the list
    (function cloneSlides(n) {
        for (let i = 0; i < slidesLength; i++) {
            let clonedSlide = slides[i].cloneNode(true);
            items.append(clonedSlide);


        }

        if (n > 1) cloneSlides(n - 1);
        return;
    })(2);

    // Click events
    prev.addEventListener('click', function() {shiftSlide(-1)});
    next.addEventListener('click', function() {shiftSlide(1)});

    // Transition event
    items.addEventListener('transitionend', checkAndUpdateIndex);


    function shiftSlide(direction) {
        items.classList.add('shifting');
        posInitial = items.offsetLeft;

        if (direction == -1) {
            items.style.left = posInitial + (slideSize + marginLeftRight) + 'px';
            index--;
        }

        if (direction == 1) {
            items.style.left = posInitial - (slideSize + marginLeftRight) + 'px';
            index++;
        }
    }

    function checkAndUpdateIndex() {
        items.classList.remove('shifting');

        if (index <= -3) {
            items.style.left = -(slidesLength * (slideSize + marginLeftRight)) + 'px';
            index = slidesLength;
        }

        if (index >= slidesLength) {
            items.style.left = -(slidesLength * (slideSize + marginLeftRight)) + 'px';
            index = 0;
        }
    }









}

slide(slides, prev, next);