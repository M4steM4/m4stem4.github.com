if (module.hot) {
    console.log("test ");
    module.hot.accept();
}

import './index.scss';

var div = {
    brick: `<div class="brick"></div>`,
    hole: `<div class="hole"></div>`
}

function brick(value, num) {
    var text = $('.line').html();
    for(var i = 0; i < num; i++) {
        text += value;
    }
    $('.line').html(text);
}

brick(div.brick, 5);
brick(div.hole, 3);
brick(div.brick, 5);

$(window).on('mousewheel', function(e) {
    var wheelDelta = e.originalEvent.wheelDelta;
    if (wheelDelta > 0) {
        $('.mario').css("transform", "rotateY(180deg)");
        $(this).scrollTop(0);
        $(this).scrollLeft(-wheelDelta/5 + $(this).scrollLeft());
    } else {
        $('.mario').css("transform", "rotateY(0deg)");
        $(this).scrollTop(0);
        $(this).scrollLeft(-wheelDelta/5 + $(this).scrollLeft());
    }
});

$(window).on('click', function(e) {
    $('.mario').css({"animation": "jump 2s infinite ease-out", "-webkit-animation": "jump $time infinite ease-out"});
    setTimeout( () => {
        $('.mario').css({"animation": "nop", "-webkit-animation": "nop"});
    }, 1500);
});
