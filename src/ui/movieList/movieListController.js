'use strict';

import movies from '../../mocks/movies.js';
import Moment from 'moment';

class MovieListController {
  constructor (
    $state
    ) {
    this.$state = $state;
    this.movieList= movies;
    this.searchInput = '';
    this.date = new Moment().format();
  }

  openDetail (id) {
    this.$state.go('movie', {movieId: id});
  }
}

angular.$inject = [
  '$state'
];

angular.module('red').controller('movieListController', MovieListController);
