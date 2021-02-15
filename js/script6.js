// 29 yrok 
"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),    
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '400px';
box.style.cssText = 'background-color: blue; width: 400px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';
// for (let i=0; i< hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');
// console.log(div);
// console.log(text);
div.classList.add('black');

wrapper.append(div); // dobavka v konec detei
// wrapper.appendChild(div); // dobavka v konec detei

// wrapper.prepend(div); // dobavka v nachalo detei

// hearts[0].before(div); // vstavka pered elementom
// hearts[0].after(div); // vstavka posle elementa

// wrapper.insertBefore(div, hearts[1]); // vstavka pered elementom

// circles[0].remove(); //ydalenie elementa
// wrapper.removeChild(hearts[1]); //ydalenie elementa


// hearts[0].replaceWith(circles[0]); //zamena elementa hearts na circle
// wrapper.replaceChild(circles[0], hearts[0]); //zamena elementa hearts na circle

div.innerHTML = "<h1>Hello World!!!</h1>";

// div.textContent = "Hello World!!!";

div.insertAdjacentHTML("afterend",'<h2>Pipl Hello</h2>')