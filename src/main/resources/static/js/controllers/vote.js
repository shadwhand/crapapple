'use strict';

angular.module('ifday')
  .controller('VoteCtrl', function ($scope) {
  	$scope.buttonEnabled = true;
    $scope.disableButton = function(){
		buttonEnabled = false;
    }
  });
