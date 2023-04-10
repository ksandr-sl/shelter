const burger = document.getElementById('burger');
const burgerBtn = document.getElementById('burger__button');
const burgerMenu = document.getElementById('burger__menu');
const blackout = document.getElementById('blackout');

burgerBtn.addEventListener('click', (e) => {
    //останавливаем всплытие события
    e.stopPropagation();

    //блокируем скролл на странице
    document.documentElement.style.overflow = 'hidden';

    //показываем/скрываем кнопку
    burgerBtn.classList.toggle('_open');
    //показываем/скрываем меню
    burgerMenu.classList.toggle('_show');
    //показываем/скрываем фон
    blackout.classList.toggle('visible');

    //ЕСЛИ меню скрыто включаем скролл
    if (!burgerMenu.classList.contains('_show')) document.documentElement.style.overflow = '';
    //ЕСЛИ фон свелый переключаем цвет кнопки
    if (burger.classList.contains('burger_lite')) burgerBtn.classList.toggle('_lite');
});

document.addEventListener('click', (e) => {

    //composedPath() возвращает путь к событию в виде массива объектов
    //includes() проверяет наличие элемента в массиве
    if (!e.composedPath().includes(burgerMenu) || e.target.classList.contains('menu__link')) {

        //ЕСЛИ клик НЕ по указанному блоку ИЛИ по элементу с указанным классом...
        //скрываем кнопку
        burgerBtn.classList.remove('_open');
        //скрываем меню
        burgerMenu.classList.remove('_show');
        //скрываем фон
        blackout.classList.remove('visible');
        //включаем скролл
        document.documentElement.style.overflow = '';
        //ЕСЛИ фон свелый красим кнопку
        if (burger.classList.contains('burger_lite')) burgerBtn.classList.add('_lite');
    }
});