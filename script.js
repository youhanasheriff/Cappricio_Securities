

const modeBtn = document.querySelector(".mode");

modeBtn.addEventListener("click", ()=>{
    modeBtn.classList.toggle("active");
    if (modeBtn.className !== "mode active"){
        document.documentElement.style.setProperty('--primary', '#fcfcfc');
        document.documentElement.style.setProperty('--dark-primary', '#323234');
        document.documentElement.style.setProperty('--text-color', 'black'); 
        document.documentElement.style.setProperty('--link-color', '#255fffa8'); 
        document.documentElement.style.setProperty('--link-hover', '#25ff25');
        document.documentElement.style.setProperty('--timeline-background', '#5471541F');
        document.documentElement.style.setProperty('--tl-content-backgroud', '#2323');
        document.documentElement.style.setProperty('--content-shadow', '#000000b3');
    }else{
        document.documentElement.style.setProperty('--primary', '#323234');
        document.documentElement.style.setProperty('--dark-primary', '#fcfcfc');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--link-color', '#25ff25'); 
        document.documentElement.style.setProperty('--timeline-background', '#282828'); 
        document.documentElement.style.setProperty('--tl-content-backgroud', '#0000005c');
        document.documentElement.style.setProperty('--content-shadow', '#ffffffb3');
    }
})


//carousel
const carouselSlide = document.querySelector(".carousel-slide")
const carouselImages= document.querySelectorAll(".security-services");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//Button Listenner
nextBtn.addEventListener('click', ()=> {
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = 'transform 400ms ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
    if(counter <= 0) return;
    carouselSlide.style.transition = 'transform 400ms ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () =>{
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
});