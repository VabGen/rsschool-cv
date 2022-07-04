const prev = document.querySelectorAll('.btn-prev'),
    next = document.querySelectorAll('.btn-next'),
    slides = document.querySelectorAll('.destinations__slide'),
    dots = document.querySelectorAll('.destinations__dot');
let index = 0;

const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('destinations__dot_active');
    }
    dots[n].classList.add('destinations__dot_active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);