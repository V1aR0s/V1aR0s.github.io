//slider(start)
const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (slides[index].id === lastClone.id) {
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = '2s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = '2s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

slide.style.transform = `translateX(${-slideWidth * index}px)`
//slider(end)


document.getElementById('menu').addEventListener('click', () => {
    let x = document.getElementById('myTopnav');
    if (x.className == "topnav") {
        x.classList += " menu_none1";

    }
    else {
        console.log('input_yes');
        x.classList = "topnav";
    }
})

document.getElementById('search').addEventListener('click', () => {
    let x = document.getElementById('input_search');
    document.getElementById('search').innerHTML += '<img src=/"img/icon-search.png" alt="">';
    if (x.className == "input_search_class") {
        x.classList += " input_none";

    }
    else {
        console.log('input_yes');
        x.classList = "input_search_class";
    }
});


document.getElementById('menu').addEventListener('click', () => {
    let y = document.getElementsByClassName('menu');
    if (y.className == "menu") {
        console.log('input_non');
        y.classList += " menu1";
    }
    else {
        console.log('input_yes');
        y.classList = "menu";
    }
});

document.getElementById('Web_des').addEventListener('click', () => {
    let z = [document.getElementById('WebDes_work'), document.getElementById('WebDes_work1')];
    if (z[0].classList == "work") {
        z[0].classList += " work_none";
        z[1].classList += " work_none";
    }
    else {
        z[0].classList = "work";
        z[1].classList = "work";
    }
})

document.getElementById('photo').addEventListener('click', () => {
    let z = [document.getElementById('photo_work2'), document.getElementById('photo_work1')];
    if (z[0].classList == "work") {
        z[0].classList += " work_none";
        z[1].classList += " work_none";
    }
    else {
        z[0].classList = "work";
        z[1].classList = "work";
    }
})

document.getElementById('Illustration').addEventListener('click', () => {
    let z = document.getElementById('Illustration1');
    if (z.classList == "work") {
        z.classList += " work_none";
    }
    else {
        z.classList = "work";
    }
})

document.getElementById('Mob_app').addEventListener('click', () => {
    let z = document.getElementById('mob1');
    if (z.classList == "work") {
        z.classList += " work_none";
    }
    else {
        z.classList = "work";
    }
})