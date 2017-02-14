import PhotoSwipe from 'photoswipe/dist/photoswipe.min';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min';
import Masonry from 'masonry-layout/dist/masonry.pkgd';
import MotionUI from 'motion-ui';


function Index() {
    var blogGrid = 'div.blog-grid';
    if ($(blogGrid).length == 0)
        return;

    var msnry = null

    Foundation.onImagesLoaded($(blogGrid + ' img'), function () {
        msnry = new Masonry(blogGrid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            transitionDuration: '0.6'
        });

        showTagged();
        $(blogGrid + ' img').removeClass('init');

         $('div.blog-grid div.grid-item a').each(function (i, elem) {
             MotionUI.animateIn(elem, 'zoom-in');
        });

        msnry.options.transitionDuration = '0.6s'
    });

    function getShowHideElements() {
        var tag = decodeURIComponent(window.location.hash.replace('#', ''));

        var currentlyShown = $('div.blog-grid div.grid-item');
        var shouldBeShown = $('div.blog-grid div.real-grid-item');

        if (tag != '')
            shouldBeShown = $('div.blog-grid div.real-grid-item[data-tags*="' + tag + '"]');

        var toShow = shouldBeShown.not(currentlyShown);
        var toHide = currentlyShown.not(shouldBeShown);

        return {'toShow': toShow, 'toHide': toHide};
    }

    function showTagged() {
        var elements = getShowHideElements();

        elements['toHide'].removeClass('grid-item');
        elements['toShow'].removeAttr('style').addClass('grid-item');

        msnry.hideItemElements(elements['toHide']);
        msnry.reloadItems();
        msnry.layout();
    }

    $(function () {
        if ($('div.blog-grid').length > 0) {
            $(window).on('hashchange', showTagged);
        }
    })
}

module.exports = Index