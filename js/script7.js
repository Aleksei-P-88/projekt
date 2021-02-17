/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// function sort (a,b){
//     return a-b;
// }


const adChild = document.querySelectorAll('.promo__adv img'), //1
    type = document.querySelector('.promo__bg'), //2
    poster = document.querySelector('.promo__bg'), //3
    list = document.querySelector('.promo__interactive-list'); //4 ;
    let ul = document.querySelector('.promo__interactive-list');

// 1
// for (let i=0; i< adChild.length; i++){ 
//     adChild[i].remove();
// }
adChild.forEach(item => {
    item.remove();
});

// 2
type.firstElementChild.textContent = 'драма';

// 3
poster.style.background = 'url("img/bg.jpg") center center/cover no-repeat';

// 4 - 5
// for (let i=0; i< list.length; i++){
//      list[i].firstChildNodes = movieDB.movies[i]
// }
// console.log(list[2].firstChildNodes);
list.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film,i)=>{
    list.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// console.log(ul);
