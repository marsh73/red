'use strict';

angular.module('red').filter('showTimes', function() {
  return function(input) {
    return input.join(', ');
  };
});
