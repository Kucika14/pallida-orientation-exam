'use strict';

let table = document.querySelector('body')

let listOfCars = function(){
    ajax('GET', '', '/search', carList);
}

let carList = (data) => {
    console.log(data)
    table.innerHTML = ''
    data.forEach(function(e) {
        let play = document.createElement('li');
        table.appendChild(play);
        play.textContent = e.car_brand
    })
}