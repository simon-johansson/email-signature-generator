'use strict';

angular.module('screenSignaturesApp')
    .directive('draggable', function($document) {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var startX = 0,
                    startY = 0,
                    x = 0,
                    y = 0;

                var header = angular.element(element.children()[0]);

                element.css({
                    position: 'relative',
                });

                header.css({
                    cursor: 'pointer'
                });

                header.on('mousedown', function(event) {
                    // Prevent default dragging of selected content
                    event.preventDefault();
                    startX = event.pageX - x;
                    startY = event.pageY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });

                function mousemove(event) {
                    y = event.pageY - startY;
                    x = event.pageX - startX;
                    element.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
                }

                function mouseup() {
                    $document.off('mousemove', mousemove);
                    $document.off('mouseup', mouseup);
                }
            }
        };
    });
