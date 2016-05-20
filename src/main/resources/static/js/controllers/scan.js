'use strict';

angular.module('ifday')
  .controller('ScanCtrl', function ($scope, $location) {
    $scope.loadProduct = function(){
		$location.url("/#/upload");
    };

    $scope.title = "Scan Page";
  });
