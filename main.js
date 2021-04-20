const translate = document.querySelectorAll('.translate');
const introTitle = document.querySelector('.intro-content__title');
const header = document.querySelector('header');
const shadow = document.querySelector('.shadow');
const heroContent = document.querySelector('.hero__content');
const section = document.querySelector('section');
const heroImageContainer = document.querySelector('.hero__container-img');
const opacity = document.querySelectorAll('.opacity');

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    introTitle.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 100}px`;

    heroContent.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    heroImageContainer.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
})

