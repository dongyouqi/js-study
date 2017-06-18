
var config = require('./config.json');

// var $ = require('jquery');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    console.log('this is a demo');
    console.log('this is a demo');
    return greet;
};
