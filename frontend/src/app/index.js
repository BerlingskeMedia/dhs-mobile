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
      'ngTouch',
      'LocalStorageModule',
      'flipsnap'
  ])
  .constant(
      'DOMAIN',
      'stiften.dk'
  )
  .constant(
      'BACKEND_ADDRESS',
      'https://ssoapi.bemit.dk/'
  )
  .constant(
      'BASE_URL_TO_RELATIVIZE',
      'http://stiften.dk'
  )
  .constant('config', appConfig)
  .config(function ($routeProvider, $locationProvider, $httpProvider, localStorageServiceProvider) {
    $routeProvider
        .when('/logout', {
            template: " ",
            controller: 'LogoutController'
        })
        .when('/login', {
            templateUrl: 'app/pages/loginPage/loginPageTemplate.html',
            controller: 'LoginController'
        })
        .when('/foto', {
            templateUrl: 'app/pages/photoPage/photoPageTemplate.html',
            controller: 'FotoController'
        })
        .when('/seneste', {
            templateUrl: 'app/pages/latestPage/latestPageTemplate.html',
            controller: 'LatestController'
        })
        .when('/kontakt', {
            templateUrl: 'app/pages/contactPage/contactPageTemplate.html',
            controller: 'ContactController'
        })
        .when('/redaktion', {
            templateUrl: 'app/pages/staffPage/staffPageTemplate.html',
            controller: 'StaffController'
        })
        .when('/søg', {
            templateUrl: 'app/pages/searchPage/searchPageTemplate.html',
            controller: 'SearchController'
        })
        .when('/:tag/:articleid', {
            // We use this hack to load different template based on Bond content types.
            template: '<div stiften-spinner ng-show="contentLoading"></div><article ng-include="templateUrl"></article>',
            controller: 'StoryController'
        })
        .when('/404', {
            templateUrl: 'app/pages/404Page/404PageTemplate.html',
            controller: 'fourofourController'
        })
        .when('/:tag', {
            templateUrl: 'app/pages/listPage/listPageTemplate.html',
            controller: 'ListController'
        })
        .when('/', {
            templateUrl: 'app/pages/frontPage/frontPageTemplate.html',
            controller: 'FrontpageController'
        })
        .otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('!');

    localStorageServiceProvider.setPrefix('stm');
  })
  .config( [
      '$compileProvider',
      function( $compileProvider )
      {
          // Allow sms-links
          $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|sms):/);
      }
  ])
  .config(function($httpProvider) {
    // The interceptor add a custom header adding the SSO token
    var interceptor = function($cookies) {
      return {
        request: function(config) {
          if (config.url.match(/mecommobile/g) && config.method === 'GET') {
            config.headers['X-MJM-token'] = ''; //$cookies.sso_token;
            if ('sso_token' in $cookies && $cookies.sso_token.length > 0) {
              config.headers['X-MJM-token'] =  $cookies.sso_token;
            }
          }
          return config;
        }
      }
    }

    $httpProvider.interceptors.push(interceptor)
  });
