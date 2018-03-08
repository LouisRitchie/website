var $ = window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');

module.exports = function () {
    $('.section-2 .text')
        .velocity({
            left: '10px',
            opacity: 0
        }, 0)
        .delay(100)
        .velocity({
            left: '50px',
            opacity: 1
        }, 600, 'easeOutCubic');
};
