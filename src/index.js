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

function addTree(location, num) {
    var tree = "";
    for(var i = 0; i < num; i++) {
        tree += `<div class="triangular-tree"> <div class="tree"> <div class="part1 part"><span class="top triangle"></span><span class="bottom triangle"></span></div> <div class="part2 part"><span class="top triangle"></span><span class="bottom triangle"></span><span class="bottom2 triangle"></span></div> <div class="part3 part"><span class="bottom triangle"></span><span class="bottom2 triangle"></span><span class="bottom3 triangle"></span><span class="bottom4 triangle"></span><span class="bottom5 triangle"></span></div> </div> <div class="base"></div> </div>`;
    }
    location.html(tree);
}

function addFox(location, num) {
    var fox = `<div class="wolf">`;
    for(var i = 0; i < 3; i++) {
        fox += `<div class="fox"> <div class="body"> <div class="part part1"></div> <div class="part part2"></div> <div class="part part3"></div> </div> <div class="tail"></div> <div class="legs"></div> </div>`;
    }
    fox += `</div>`;
    var temp = $(`.line${num}`).html();
    $('.line' + num).html(temp + fox);
}

function addMiniTree(location, num) {
    var miniTree = `<div class="mushroom">`;
    for(var i = 0; i < 21; i++) {
        miniTree += `<div class="mini-tree"> <div class="tree"></div> <div class="base"></div> </div>`;
    }
    miniTree += `</div>`
    var temp = $(`.line${num}`).html();
    $('.line' + num).html(temp + miniTree);
}



var minitreeLine;
var wolfLine;
var $treeLine1 = $('.line1');
var $treeLine2 = $('.line2');


addTree($treeLine1, 32);
addTree($treeLine2, 22);
addFox(wolfLine, 1);
addFox(wolfLine, 2);
addMiniTree(minitreeLine, 1);
addMiniTree(minitreeLine, 2);
