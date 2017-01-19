import 'what-input/dist/what-input'
import 'foundation-sites/dist/js/foundation';
import MotionUI from 'motion-ui';
$(document).foundation();

$('div.blog_grid div.column').each(function(i, elem){
    MotionUI.animateIn(elem, 'zoom-in');
})

//MotionUI.animateIn($("div.blog_grid div.column"), "mui-spin");