'use strict';

angular.module('screenSignaturesApp')
    .directive('selectionLost', function($rootScope) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                element.on('click', function() {
                	$rootScope.$broadcast('selectionLost');
                });
            }
        };
    });
