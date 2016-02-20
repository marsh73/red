'use strict';

angular.module('red').directive('bannerAd', [function () {
  return {
    restrict: 'EA',
    controller: 'bannerAdController',
    controllerAs: 'bannerAdCtrl',
    bindToController: true,
    replace: true,
    templateUrl: './ui/bannerAd/bannerAd.html'
  };
}]);
