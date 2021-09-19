const slide = document.getElementsByClassName('slide');
const ctrl = document.querySelectorAll('.controle i');
const slideNumber = document.getElementsByClassName('status');
const next = ctrl[0];
const prev = ctrl[1];
let counter = 0;
//frist display none all slider
function displayNone() {
    for (let i = 0; i < slide.length; i++) {
        const element = slide[i];
        element.style.display = 'none';
    }
}
// deactive all slider Number shower
function deactive() {
    for (let i = 0; i < slideNumber.length; i++) {
        const element = slideNumber[i];
        element.classList.remove('active');
    }
}

//go to favorite slide
for (let i = 0; i < slide.length; i++) {
    const element = slideNumber[i];
    element.addEventListener('click', (event) => {
        event.preventDefault();
        deactive();
        displayNone();
        element.classList.add('active');
        counter = i;
        slide[counter].style.display = 'block';
    });
}
// for (let key in slideNumber) {
//     slideNumber[key].addEventListener('click', (e) => {
//         e.preventDefault();
//         deactive();
//         displayNone();
//         slideNumber[key].classList.add('active');
//         counter = key;
//         slide[counter].style.display = 'block';
//     });
// }
//next bottom 
next.addEventListener('click', (e) => {
    e.preventDefault();
    counter++;
    if (counter > slideNumber.length - 1) counter = 0;
    displayNone();
    deactive();
    slide[counter].style.display = 'block';
    slideNumber[counter].classList.add('active');
});
// Previous bottom 
prev.addEventListener('click', (e) => {
    e.preventDefault();
    counter--;
    if (counter < 0) counter = slideNumber.length - 1;
    displayNone();
    deactive();
    slide[counter].style.display = 'block';
    slideNumber[counter].classList.add('active');
});
// auto play slider
setInterval(() => {
    counter++;
    if (counter > slideNumber.length - 1) counter = 0;
    displayNone();
    deactive();
    slide[counter].style.display = 'block';
    slideNumber[counter].classList.add('active');
}, 8000);