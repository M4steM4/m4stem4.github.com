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

function addMiniTree(num) {
    var miniTree = "";
    for(var i = 0; i < 30; i++) {
        miniTree += `<div class="mini-tree"> <div class="tree"></div> <div class="base"></div> </div>`;
    }
    $(`.tree${num}`).html(miniTree);
}

function addTree(location, num) {
    var tree = "";
    for(var i = 0; i < num; i++) {
        tree += `<div class="triangular-tree"> <div class="tree"> <div class="part1 part"><span class="top triangle"></span><span class="bottom triangle"></span></div> <div class="part2 part"><span class="top triangle"></span><span class="bottom triangle"></span><span class="bottom2 triangle"></span></div> <div class="part3 part"><span class="bottom triangle"></span><span class="bottom2 triangle"></span><span class="bottom3 triangle"></span><span class="bottom4 triangle"></span><span class="bottom5 triangle"></span></div> </div> <div class="base"></div> </div>`;
    }
    tree += `<div class="tree${num}"></div>`;
    location.html(tree);
}
var $line1 = $('.line1');
var $line2 = $('.line2');


addTree($line1, 30);
addTree($line2, 20);
addMiniTree(30);
addMiniTree(20);
