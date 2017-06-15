
var config = require('./config.json');

// require("./stylesheet.css");

require("./sass/a.scss");
require("./sass/b.scss");



module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    console.log('this is a demo');
    console.log('this is a demo');
    return greet;

};
