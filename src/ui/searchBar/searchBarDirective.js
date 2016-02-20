'use strict';

angular.module('red').directive('searchBar', [function () {
  return {
    restrict: 'EA',
    scope: {
      searchInput: '='
    },
    replace: true,
    templateUrl: './ui/searchBar/searchBar.html'
  };
}]);
