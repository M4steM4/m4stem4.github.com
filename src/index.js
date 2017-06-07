// var count = 10;
//
// function Picture() {
// 	count = Counting(count);
// 	Resize(count);
// 	return false;
// }
//
// function Counting(count){
// 	if (event.wheelDelta >= 120)
// 		count++;
// 	else if (event.wheelDelta <= -120)
// 		count--;
// 	return count;
// }
//
// function Resize(count){
// 	page.style.zoom = count + '0%';
// }
//
// function Picture1(){
// 	if (event.wheelDelta >= 120)
// 		window.scrollBy(1,0);
// 	else if (event.wheelDelta <= -120)
// 		window.scrollBy(-1,0);
// }

//
// $(document).ready(function() {
//     var value = 0;
//     if(true) {
//         $(document).on('scroll', (e) => {
//             e.preventEvent
//             console.log('test');
//         });
//     }
//
//     function
// });
if(module.hot){
  module.hot.accept()
}
import './index.scss';

$(window).on('mousewheel', function(e){
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta > 0){
        console.log("up");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    } else {
        console.log("down");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }
});
