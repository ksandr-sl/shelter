const burger = document.getElementById('burger');
const burgerBtn = document.getElementById('burger__button');
const burgerMenu = document.getElementById('burger__menu');
const blackout = document.getElementById('blackout');

burgerBtn.addEventListener('click', (e) => {
    //останавливаем всплытие события
    e.stopPropagation();

    burgerMenu.style.display = 'flex';
    setTimeout(() => {
        burgerMenu.classList.toggle('_show');
    });
    if (burgerBtn.classList.contains('_open')) {
        setTimeout(() => {
            burgerMenu.style.display = 'none';
        }, 100);
    };

    burgerBtn.classList.toggle('_open');
    blackout.classList.toggle('visible');

    document.documentElement.style.overflow = 'hidden'

    console.log('open? ' + burgerBtn.classList.contains('_open'));

    setTimeout(() => {
        if (!burgerBtn.classList.contains('_open')) document.documentElement.style.overflow = '';
    });

});

if (burger.classList.contains('burger_lite')) {

    burgerBtn.addEventListener('click', (e) => {
        burgerBtn.classList.toggle('_lite');
    });
}

document.addEventListener('click', (e) => {

    //ЕСЛИ клик НЕ по указанному блоку ИЛИ по элементу с указанным классом...
    //composedPath() возвращает путь к событию в виде массива объектов
    //includes() проверяет наличие элемента в массиве
    if (!e.composedPath().includes(burgerMenu) || e.target.classList.contains('menu__link')) {

        burgerMenu.classList.remove('_show');

        setTimeout(() => {
            burgerMenu.style.display = 'none';
        }, 100);

        burgerBtn.classList.remove('_open');
        blackout.classList.remove('visible');
        document.documentElement.style.overflow = '';

        if (burger.classList.contains('burger_lite')) {
            burgerBtn.classList.add('_lite');
        }

    }
});