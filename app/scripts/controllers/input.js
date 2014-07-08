'use strict';

angular.module('screenSignaturesApp')
    .controller('InputCtrl', function($scope, $rootScope, $document, Details) {
        $scope.model = {
            signatureIsSelected: false,
            readyForPasting: false,
            keydown: {},
        };
        $scope.details = {};
        $scope.details = Details.getUser();

        $scope.onPhoneFocus = function(number) {
            if (number === "" || !angular.isDefined(number)) {
                $scope.details.phone = "+46 7";
            }
        };
        $scope.onPhoneBlur = function(number) {
            if (number === "+46 7") {
                $scope.details.phone = "";
            }
        };
        $scope.selectSignature = function() {
            $scope.model.signatureIsSelected = true;
            $rootScope.$broadcast('selectSignature');
            console.log($scope.model.signatureIsSelected);
        };

        $document.on('click', function(ev) {
            if (!angular.element(ev.target).hasClass('this-button')) {
                $scope.$apply(function() {
                    $scope.model.signatureIsSelected = false;
                    $scope.model.readyForPasting = false;
                });
            }
            // console.log($scope.model.signatureIsSelected);
        });

        $document.on('keydown keyup', function(e) {
            var keydown = (e.type === 'keydown');
            if (e.which === 17) { // ctrl
                $scope.$apply(function() {
                    $scope.model.keydown.ctrl = keydown ? true : false;
                });
            }
            if (e.which === 91 || e.which === 224) { // cmd
                $scope.$apply(function() {
                    if (keydown) {
                        $scope.model.keydown.cmd = true;
                    } else {
                        $scope.model.keydown.cmd = false;
                        $scope.model.keydown.c = false;
                    }
                });
            }
            if (e.which === 67) { // c
                $scope.$apply(function() {
                    $scope.model.keydown.c = keydown ? true : false;
                });
            }
            if ($scope.model.keydown.c && $scope.model.keydown.cmd) {
                $scope.$apply(function() {
                    $scope.model.readyForPasting = true;
                });
            }
        });

        $scope.validateForm = function(userDetails) {
            if (inputForm.$valid) {
                $scope.showValidation = false;
            } else {
            	$scope.showValidation = true;
            }
        };

        $scope.getError = function(error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "This field is required, please fill in a value";
                } else if (error.email) {
                    return "Please enter a valid email address";
                }
            }
        }

        $scope.$watch('details.name', function(newVal) {
            Details.setName(newVal);
        });
        $scope.$watch('details.title', function(newVal) {
            Details.setTitle(newVal);
        });
        $scope.$watch('details.phone', function(newVal) {
            Details.setPhone(newVal);
        });
        $scope.$watch('details.twitter', function(newVal) {
            Details.setTwitter(newVal);
        });
        $scope.$watch('details.skype', function(newVal) {
            Details.setSkype(newVal);
        });
        $scope.$watch('details.email', function(newVal) {
            Details.setEmail(newVal);
            if ($scope.inputForm.email.$dirty) {
                Details.emailInputIsDirty(true);
            };
        });

    });
