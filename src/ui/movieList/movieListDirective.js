'use strict';

angular.module('red').directive('movieList', [function () {
  return {
    restrict: 'EA',
    controller: 'movieListController',
    controllerAs: 'movieListCtrl',
    bindToController: true,
    replace: true,
    templateUrl: './ui/movieList/movieList.html'
  };
}]);
