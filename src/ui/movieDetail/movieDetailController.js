'use strict';

import movies from '../../mocks/movies.js';

class MovieDetailController {
  constructor (
    $stateParams,
    $state
    ) {
    this.$state = $state;
    this.movieId = $stateParams.movieId;
    this.movie = movies[this.movieId];
  }

  close () {
    this.$state.go('movies');
  }
}

angular.$inject = [
  '$stateParams',
  '$state',
];

angular.module('red').controller('movieDetailController', MovieDetailController);
