const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', ()=> container.classList.add('show-nav'));
close.addEventListener('click', ()=>container.classList.remove('show-nav'));




// sticky element transition
const searchBtn = document.querySelector('.search-btn');
const searchField = document.querySelector('#search');
const searchEl = document.querySelector('.search');


searchBtn.addEventListener('click', ()=>{
    searchEl.classList.toggle('active');
    searchField.focus();
})




//blurred image loading

const img = document.querySelector('.img');
const loading = document.querySelector('.loading');

let loadPercent = 0;

let interval = setInterval(blurringEffect, 30);
function blurringEffect(){
    loadPercent++;
    if(loadPercent > 99){
        clearInterval(interval);
    }
    // console.log(loadPercent);
    loading.innerHTML = `${loadPercent}%`;
    loading.style.opacity = scale(loadPercent, 1, 100, 1, 0);

    img.style.filter =  `blur(${scale(loadPercent, 0, 100, 30, 0)}px)`;

}

//mapping function
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}