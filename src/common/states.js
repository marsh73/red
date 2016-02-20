'use strict';

angular.module('red')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/',
        template: '<movie-list></movie-list>'
      })
      .state('movie', {
        url: '/:movieId',
        template: '<movie-detail></movie-detail>',
      });

    }
  ])
  .config(['$urlRouterProvider', function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }
  ]);
