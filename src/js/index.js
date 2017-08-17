if (module.hot) {
    console.log("test ");
    module.hot.accept();
}

import './index.scss';

function block(location, num) {
    var text = "";
    for(var i = 0; i < num; i++) {
        text += `<div class="brick"></div>`;
    }
    console.log('Success');
    location.html(text);
}

block($('.line1'), 32);
block($('.line2'), 32);

$(window).on('mousewheel', function(e){
    var wheelDelta = e.originalEvent.wheelDelta;
    if (wheelDelta > 0) {
        $(this).scrollTop(0);
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    } else {
        $(this).scrollTop(0);
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }
});
