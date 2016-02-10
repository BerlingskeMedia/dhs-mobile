app.directive('stiftenContentBody', function ($compile, $sce) {
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          scope.prepro = false;
          scope.$watch(function () {
              return scope.$eval(attrs.stiftenContentBody);
          }, function (value) {
                element.html(value && value.toString());
                $compile(element.contents())(scope);
          });
      }
    };
});