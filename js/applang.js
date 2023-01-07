//Made andrlife https://github.com/andrlife
// Languages
const select = document.querySelector('select'); // получаю select 
select.addEventListener('change', cahngeURLLanguages); //Вешаю слушатель событий на select и обозначаю его как change
const allLang = ['en', 'ua', 'ru']; //Проверка доступных языков

//Перенаправить на URL с указанием языка
function cahngeURLLanguages() { 			// получаю язык из select
  let lang = select.value;				// получаю язык из select
  location.href = window.location.pathname + '#' +lang; //Дописую выбранный язык в URL
  location.reload(); // перезапуск страницы
}

function cahngeLanguages() {
  let hash = window.location.hash;
  hash = hash.substr(1); // удаляю # в начале хеша 
  console.log(hash)
  //Проверка доступных языков
  if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#en'; // если выбраного языка нет то присваиваю принудительно язык по умолчанию
      location.reload();
  }
  select.value = hash; // присваиваю select нужный язык
  document.querySelector('title').innerHTML = langArr['titl'][hash]; // меняю язык в титле 
//   document.querySelector('.lng-kay1').innerHTML = langArr['kay1'][hash]; 
  
    for (let key in langArr) { //перебераем элементы перевода по ключам
        let elem = document.querySelector('.lng-' + key); //получаю элемент
        if (elem) { // проверка получили элемент или нет
            elem.innerHTML = langArr[key][hash]; //если да, то присваиваю элемент
        }
    }
}

cahngeLanguages();