'use strict';

var $ = require('jquery');
var fullpage = require('fullpage.js');

var executeAnimationOfSection1 = require('./animations/section-1');
var executeAnimationOfSection2 = require('./animations/section-2');

$(document).ready(function () {  
    // disable velocity mobileHA because it overrides the transform values we defined in stylesheets.
    $.Velocity.defaults.mobileHA = false;
    
    $('#fullpage').fullpage({
        menu: '#menu',
        afterLoad: function (anchorLink, index) { 
            hideAnimatedItems();                   // reset all animated-items to their default styles.
            switch (index) {
                case 1: 
                    $('#btn-next').show();
                    executeAnimationOfSection1();
                    break;
                case 2:
                    $('#btn-next').hide();
                    executeAnimationOfSection2();
                    break;
            }
        }
    });
    
    // move to next section when btn-next is clicked.
    $('#btn-next').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
});

function hideAnimatedItems() {
    $('.animated-item').css({
        opacity: 0
    });
}
