'use strict';

angular.module('screenSignaturesApp')
    .controller('SignatureCtrl', function($scope, $rootScope, Details) {

    	$scope.details = {};
    	$scope.details = Details.getUser();

    });
