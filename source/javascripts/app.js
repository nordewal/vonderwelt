import 'what-input/dist/what-input'
import 'foundation-sites/dist/js/foundation';

import Article from './article.js';
new Article();

import Index from './index.js';
new Index();

import Map from './map.js';
new Map();

$(document).foundation();

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-15535968-5', 'auto');
ga('send', 'pageview');
