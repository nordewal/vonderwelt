import MotionUI from 'motion-ui';

function Layout() {
    $('div.blog_grid div.column').each(function (i, elem) {
        MotionUI.animateIn(elem, 'zoom-in');
    })
}

module.exports = Layout;