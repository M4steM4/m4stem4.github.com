if (module.hot) {
    console.log("test ");
    module.hot.accept();
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

function addFox(location, count) {
    var fox = `<div class="wolf">`;
    for(var i = 0; i < count; i++) {
        fox += `<div class="fox"> <div class="body"> <div class="part part1"></div> <div class="part part2"></div> <div class="part part3"></div> </div> <div class="tail"></div> <div class="legs"></div> </div>`;
    }
    fox += `</div>`;
    var temp = $('.grass').html();
    $('.grass').html(temp + fox);
}

function addMiniTree(location, count) {
    var miniTree = `<div class="mushroom">`;
    for(var i = 0; i < count; i++) {
        miniTree += `<div class="mini-tree"> <div class="tree"></div> <div class="base"></div> </div>`;
    }
    miniTree += `</div>`
    var temp = $('.grass').html();
    $('.grass').html(temp + miniTree);
}

var minitreeLine;
var wolfLine;
var $treeLine = $('.grass');


addTree($treeLine, 70);
addFox(wolfLine, 5);
addMiniTree(minitreeLine, 45);
