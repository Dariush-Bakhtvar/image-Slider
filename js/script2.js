const slides = document.querySelectorAll('.slide');
const ctrl = document.querySelectorAll('.controle i');
const indicator = document.querySelectorAll('.slide-status .status');
const next = ctrl[0],
    prev = ctrl[1];
let index = 0;

//set index value equal i in the element has class active
for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) index = i;

}
// remove  slide and indicator that has class active
function removeClass() {
    for (let i = 0; i < indicator.length; i++) {
        indicator[i].classList.remove("active");
        slides[i].classList.remove("active");
    }
}
//remove slides and indicators
function display() {
    let num;
    removeClass();
    // this.classList.add("active"); show slides[num]
    this.classList.add('active');
    for (let i = 0; i < indicator.length; i++) {
        if (indicator[i].classList.contains('active')) num = i;
    }
    slides[num].classList.add('active');
    index = num;
}
indicator.forEach(elem => {
    elem.addEventListener('click', display);
});
//click to next slide
next.addEventListener('click', () => {
    slides[index].classList.remove("active");
    indicator[index].classList.remove("active");
    index++;
    if (index == slides.length) {
        index = 0;
    }
    slides[index].classList.add("active");
    indicator[index].classList.add("active");
});
prev.addEventListener('click', () => {
    slides[index].classList.remove("active");
    indicator[index].classList.remove("active");
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    slides[index].classList.add("active");
    indicator[index].classList.add("active");
});
//auto play slider
setInterval(() => {
    slides[index].classList.remove("active");
    indicator[index].classList.remove("active");
    index++;
    if (index == slides.length) {
        index = 0;
    }
    slides[index].classList.add("active");
    indicator[index].classList.add("active");
}, 5000);