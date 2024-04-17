// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })


// let items = document.querySelectorAll('.slider .item');
//     let next = document.getElementById('next');
//     let prev = document.getElementById('prev');
    
//     let active = 3;
//     function loadShow(){
//         let stt = 0;
//         items[active].style.transform = `none`;
//         items[active].style.zIndex = 1;
//         items[active].style.filter = 'none';
//         items[active].style.opacity = 1;
//         for(var i = active + 1; i < items.length; i++){
//             stt++;
//             items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
//             items[i].style.zIndex = -stt;
//             items[i].style.filter = 'blur(5px)';
//             items[i].style.opacity = stt > 2 ? 0 : 0.6;
//         }
//         stt = 0;
//         for(var i = active - 1; i >= 0; i--){
//             stt++;
//             items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
//             items[i].style.zIndex = -stt;
//             items[i].style.filter = 'blur(5px)';
//             items[i].style.opacity = stt > 2 ? 0 : 0.6;
//         }
//     }
//     loadShow();
//     next.onclick = function(){
//         active = active + 1 < items.length ? active + 1 : active;
//         loadShow();
//     }
//     prev.onclick = function(){
//         active = active - 1 >= 0 ? active - 1 : active;
//         loadShow();
//     }


const cardContainer = document.querySelector('.card-containers');
const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let currentIndex = 0;

// After the 'currentIndex' declaration, add:
window.addEventListener('load', () => {
    scrollToCard(currentIndex);
  });
  

leftArrow.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  scrollToCard(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, cards.length - 3);
  scrollToCard(currentIndex);
});


function scrollToCard(index) {
  const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
  cardContainer.style.transform = `translateX(-${index * cardWidth}px)`;
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    currentIndex = index;
    scrollToCard(currentIndex);
  });
});


  