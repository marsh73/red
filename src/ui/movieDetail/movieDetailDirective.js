'use strict';

angular.module('red').directive('movieDetail', [function () {
  return {
    restrict: 'EA',
    controller: 'movieDetailController',
    controllerAs: 'movieDetailCtrl',
    replace: true,
    templateUrl: './ui/movieDetail/movieDetail.html'

  };
}]);
