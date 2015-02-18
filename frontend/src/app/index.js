/*******************************************************************************
 * This file is part of the stiften package.
 *
 * (c) Berlingske Media A/S
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*******************************************************************************/

/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name stiftenDkApp
 * @description
 * # stiftenDkApp
 *
 * Main module of the application.
 */

var app = angular
    .module('mStiftenDkApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .constant(
        'BACKEND_ADDRESS',
        window.location.protocol + '//' + window.location.host + '/api/v1/'
        //'http://54.171.106.198/api/v1/'
    )
    .constant('config', appConfig);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/pages/frontPage/frontPageTemplate.html',
            controller: 'FrontpageController'
        })
        .when('/:tag/:id', {
            templateUrl: 'app/pages/articlePage/articleTemplate.html',
            controller: 'ArticleController'
        })
        .when('/404', {
            templateUrl: 'app/pages/404Page/404PageTemplate.html',
            controller: 'fourofourController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('!');
});
