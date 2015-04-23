'use strict';

/**
 * @ngdoc function
 * @name angularRecipesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularRecipesApp
 */
angular.module('angularRecipesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
