'use strict';

/**
 * @ngdoc function
 * @name angularRecipesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularRecipesApp
 */
angular.module('angularRecipesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
