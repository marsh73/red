'use strict';

angular.module('red', [
  'ui.router'
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['red']);
});

require('./common/states.js');

// movieList
require('./ui/movieList/movieListDirective.js');
require('./ui/movieList/movieListController.js');
require('./ui/movieList/showTimesFilter.js');

// movieDetail
require('./ui/movieDetail/movieDetailDirective.js');
require('./ui/movieDetail/movieDetailController.js');

// bannerAd
require('./ui/bannerAd/bannerAdDirective.js');
require('./ui/bannerAd/bannerAdController.js');

// movieBanner
require('./ui/searchBar/searchBarDirective.js');
