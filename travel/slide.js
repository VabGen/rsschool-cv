const prev = document.querySelector('.btn-prev'),
    next = document.querySelector('.btn-next'),
    slides = document.querySelector('.destinations__line'),
    dots = document.querySelectorAll('.destinations__dot');
slide = document.querySelector('.destinations__slide');
let width = slide.getBoundingClientRect();
let index = 1;
let i = 0;
console.log('widch', width.width)
const activeDot = n => {
    for (let dot of dots) {
        dot.classList.remove('destinations__dot_active');
    }
    dots[n].classList.add('destinations__dot_active');
}

const prepareCurrentSlide = ind => {
    activeDot(ind);
}

const nextSlide = () => {
    if (width.width == 800) {
        i -= 800;
        index++
        console.log(i)
        console.log('index', index)
        if (i < -800) {
            i = 0;
            index = 1;
        }
    } else if (width.width == 360) {
        i -= 360;
        index++
        if (i < -360) {
            i = 0;
            index = 1;
        }
    }
    prepareCurrentSlide(index);
    slides.style.left = i + 'px';
}

const prevSlide = () => {
    if (width.width == 800) {
        i += 800;
        index--
        if (i > 800) {
            i = 0;
            index = 1;
        }
    } else if (width.width == 360) {
        i += 360;
        index--
        if (i > 360) {
            i = 0;
            index = 1;
            console.log('ooo')
        }
    }
    prepareCurrentSlide(index);
    slides.style.left = i + 'px';
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
