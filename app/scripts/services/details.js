'use strict';

angular.module('screenSignaturesApp')
    .factory('Details', function() {

        var detailsObj = {
            name: 'Simon Johasson',
            title: 'Designer',
            phone: '',
            twitter: '',
            skype: '',
            email: '',
        };
        var isDirty = false;
        var isSelected = false;

        /* Getters */
        function getUser () {
        	return detailsObj;
        }
        function getName () {
        	return detailsObj.name;
        }
        function getTitle() {
            return detailsObj.title;
        }
        function getPhone() {
            return detailsObj.number;
        }
        function getTwitter() {
            return detailsObj.twitter;
        }
        function getSkype() {
            return detailsObj.skype;
        }
        function getEmail() {
            return detailsObj.email;
        }

        /* Setters */
        function setName(name) {
            detailsObj.name = name;
            updateEmail(name);
            return detailsObj.name;
        }
        function setTitle(title) {
            detailsObj.title = title;
            return detailsObj.title;
        }
        function setPhone(number) {
            detailsObj.phone = number;
            return detailsObj.number;
        }
        function setTwitter(handle) {
            detailsObj.twitter = angular.lowercase(handle.split(" ").join(""));
            return detailsObj.twitter;
        }
        function setSkype(username) {
            detailsObj.skype = angular.lowercase(username.split(" ").join(""));
            return detailsObj.skype;
        }
        function setEmail(email) {
            detailsObj.email = email;
            return detailsObj.email;
        }

        /* Validation and formating */

        function updateEmail (name) {
        	if (!isDirty && angular.isDefined(name)) {
        		var names = name.split(' '),
        			firstName = names[0],
        			lastName = '';
        		if(names.length > 0){
        			lastName = names[1];
        		}
        		var email = firstName + (angular.isDefined(lastName) ? '.' + lastName : '') + '@screeninteraction.com';
        		setEmail(angular.lowercase(email));
        	}
        }

        function emailInputIsDirty (bool) {
        	isDirty = bool;
        }
        function selectSignature (bool) {
        	isSelected = bool;
        }
        function signatureIsSelected () {
        	return isSelected;
        }

        return {
        	/* Getter */
        	getUser: getUser,
        	getName: getName,
        	getTitle: getTitle,
        	getPhone: getPhone,
        	getTwitter: getTwitter,
        	getSkype: getSkype,
        	getEmail: getEmail,
        	/* Setters */
            setName: setName,
            setTitle: setTitle,
            setPhone: setPhone,
            setTwitter: setTwitter,
            setSkype: setSkype,
            setEmail: setEmail,
            /* Validation and formating */
            emailInputIsDirty: emailInputIsDirty,
            selectSignature: selectSignature,
            signatureIsSelected: signatureIsSelected,
        };
    });
