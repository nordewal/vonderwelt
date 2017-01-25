import 'what-input/dist/what-input'
import 'foundation-sites/dist/js/foundation';
import PhotoSwipe from 'photoswipe/dist/photoswipe.min';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min';
import MotionUI from 'motion-ui';
$(document).foundation();

$('div.blog_grid div.column').each(function(i, elem){
    MotionUI.animateIn(elem, 'zoom-in');
})


// var pswpElement = document.querySelectorAll('.pswp')[0];
//
// // build items array
// var items = [
//     {
//         src: 'namibia-botswana/PC7C9303_0_small.jpg',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'namibia-botswana/PC7C7601_0_01_small.jpg',
//         w: 1200,
//         h: 900
//     }
// ];
//
// // define options (if needed)
// var options = {
// // optionName: 'option value'
// // for example:
//     index: 0 // start at first slide
// };
//
// // Initializes and opens PhotoSwipe
// var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
// gallery.init();
//
// openPhotoSwipe();
