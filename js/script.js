// yrok 31
"use strict";

const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a'),
    btns = document.querySelectorAll('button');

// btn.onclick = function () { // DOM svoistvo
//     alert('button_1');
// };

// btn.addEventListener('click',(e)=>{
//     alert('button_1');
//     e.target.remove();
// });

// btn.addEventListener('mouseenter',(e)=>{
//     console.log(e.target);
//     // console.log('Hover');
   
function evente (e) {
    console.log(e.target); // obj vizvavshij sobitie
    console.log(e.currentTarget); // obj obrabativ v dannij moment
    // alert('first');
    // e.target.removeEventListener('click',evente);
    // console.log("Event deleted");
}
// btn.addEventListener('click',evente);
// overlay.addEventListener('click',evente);

link.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(e.target);
});

btns.forEach((btn)=>{
    btn.addEventListener('click',evente, {once: true});
});
// console.log (btn);