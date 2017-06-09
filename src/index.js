if(module.hot){
  module.hot.accept()
}

import './index.scss';

$(window).on('mousewheel', function(e){
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta > 0){
        $('#train').css("transform", "rotateY(180deg)");
        $(this).scrollLeft(-wheelDelta/15 + $(this).scrollLeft());
    } else {
        $('#train').css("transform", "rotateY(0deg)");
        $(this).scrollLeft(-wheelDelta/15 + $(this).scrollLeft());
    }
});
