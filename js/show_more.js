//Made andrlife https://github.com/andrlife
const showMore = document.querySelector('.show-more'); //button
const galleryLength = document.querySelectorAll('.display__items').length; //общее кол-во элементов на странице
let items = 4; // начальное количество элементов

showMore.addEventListener('click', () => { //подключаем к кнопке свойство клик
    items += 4; //количество добавляемых элементов
    const array = Array.from(document.querySelector('.myproject').children); // масив всех элементов display__items
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));
    if (visItems.length === galleryLength) {
        showMore.style.display = 'none';
    }
})

