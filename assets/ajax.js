'use strict';


let ajax = function(method, data, response, callback) {
    let licencePlate = new XMLHttpRequest();
    data = data ? data : null;
    licencePlate.open(method, 'http://localhost:8080' + response);
    licencePlate.setRequestHeader('Content-Type', 'application/json');
    licencePlate.send(JSON.stringify(data));
    licencePlate.onreadystatechange = function() {
        if (licencePlate.readyState === XMLHttpRequest.DONE) {
            callback( JSON.parse(licencePlate.response));
        };
    };
};