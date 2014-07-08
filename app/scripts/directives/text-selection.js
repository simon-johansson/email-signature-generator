'use strict';

angular.module('screenSignaturesApp')
    .directive('textSelection', function($rootScope) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var doc = document;
                var text = element.children()[0];

                $rootScope.$on('selectSignature', function() {
                    if (doc.body.createTextRange) { // ms
                        var range = doc.body.createTextRange();
                        range.moveToElementText(text);
                        range.select();
                    } else if (window.getSelection) { // moz, opera, webkit
                        var selection = window.getSelection();
                        var range = doc.createRange();
                        range.selectNodeContents(text);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                });
            }
        };
    });
