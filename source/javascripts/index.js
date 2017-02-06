import PhotoSwipe from 'photoswipe/dist/photoswipe.min';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min';
import Masonry from 'masonry-layout/dist/masonry.pkgd';
import MotionUI from 'motion-ui';


function Index() {
    var blogGrid = 'div.blog-grid';
    if ($(blogGrid).length == 0)
        return;

    Foundation.onImagesLoaded($(blogGrid + ' img'), function () {
        var msnry = new Masonry(blogGrid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            transitionDuration: 0
        });
        msnry.layout();

        $(blogGrid + ' img').removeClass('init');
        $('div.blog-grid div.grid-item a').each(function (i, elem) {
            MotionUI.animateIn(elem, 'zoom-in');
        });

        msnry.options.transitionDuration='0.6s'
    });
}

module.exports = Index