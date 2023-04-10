const slides = document.getElementById('slides');
const popup = document.getElementById('popup');
const popupWrapper = document.querySelector('.popup__wrapper');
const popupCloseButton = document.getElementById('popup__close');
let popupImage = document.querySelector('.popup__image');
let popupTitle = document.querySelector('.popup__title');
let popupSubtitle = document.querySelector('.popup__subtitle');
let popupText = document.querySelector('.popup__text');
let popupAge = document.querySelector('.popup__age');
let popupInoculations = document.querySelector('.popup__inoculations');
let popupDiseases = document.querySelector('.popup__diseases');
let popupParasites = document.querySelector('.popup__parasites');

//add event listener on each card
Array.from(slides.children).forEach(item => {
    item.addEventListener('click', popupOpen);
});

//add event listener on close button
popupCloseButton.addEventListener('click', popupClose);

document.addEventListener('click', (e) => {
    //composedPath() возвращает путь к событию в виде массива объектов
    //includes() проверяет наличие элемента в массиве
    if (!e.composedPath().includes(popupWrapper) && popup.classList.contains('_visible')) {
        popupClose();
    };

//true останавливает погружение события
}, true)

function popupOpen(e) {
    //блокируем скролл на странице
    document.documentElement.style.overflow = 'hidden';

    popup.style.zIndex = '0';
    popup.classList.add('_visible');

    let animalName = e.target.closest('.pets__slider-item').firstElementChild.nextElementSibling.innerHTML;
    let animal = petsInfo[petsInfo.findIndex((e) => e.name == animalName)];

    popupImage.firstElementChild.setAttribute('src', animal.img);
    popupTitle.innerHTML = animal.name;
    popupSubtitle.innerHTML = animal.type + ' - ' + animal.breed;
    popupText.innerHTML = animal.description;
    popupAge.firstElementChild.innerHTML = animal.age;
    popupInoculations.firstElementChild.innerHTML = animal.inoculations;
    popupDiseases.firstElementChild.innerHTML = animal.diseases;
    popupParasites.firstElementChild.innerHTML = animal.parasites;

}

function popupClose() {
    document.documentElement.style.overflow = '';
    popup.classList.remove('_visible');
    setTimeout(() => {
        popup.style.zIndex = '-1';
    }, 500);
}