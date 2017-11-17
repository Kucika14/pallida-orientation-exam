'use strict';

let table = document.querySelector('.carlist');

let search = function() {
    let button = document.querySelector('.ok');
    let input = document.querySelector('.user_input').value;
    button.addEventListener('click', function() {
        ajax('GET', '', '/search', carList);
    });
};

let carList = (data) => {
    console.log(data);
    data.forEach(function(e) {
        let car = document.createElement('li');
        table.appendChild(car);
        car.textContent = e.plate;

    });
};