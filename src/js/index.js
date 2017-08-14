if (module.hot) {
    console.log("test ");
    module.hot.accept();
}

import './index.scss';

// function changeScroll(delta) {
//     $(window).scrollTop(0);
//     $(window).scrollLeft(-delta + $(this).scrollLeft());
// }

$(window).on('mousewheel', function(e){
    var wheelDelta = e.originalEvent.wheelDelta;
    if (wheelDelta > 0) {
        $(this).scrollTop(0);
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    } else {
        if ($(this).scrollLeft() > 5000) {
            $(this).scrollLeft(0);
            $(this).scrollTop(-wheelDelta + $(this).scrollLeft());
        } else {
            $(this).scrollTop(0);
            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        }
    }
});
