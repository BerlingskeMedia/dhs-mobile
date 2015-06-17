'use strict';


// This directive gets contents from Chartbeat
app.directive('stiftenChartbeatList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        templateUrl: 'app/directives/articlelist/mostPopularArticleListTemplate.html',
        controller: function($scope, $attrs, Chartbeat, $interval) {

          $scope.items = 10;
          $scope.expandButtonText = 'Vis flere';

          if ('items' in $attrs) {
            $scope.displayedItems = $attrs.items;
          }
          $scope.showExpandButton = true;
          if ('initial' in $attrs) {
            $scope.initialItems = $attrs.initial;
            $scope.displayedItems = $attrs.initial;
            if ($attrs.initial != $scope.items) {
                $scope.showExpandButton = true;
            }
          }
          $scope.showMore = function() {
            $scope.displayedItems = $scope.items;
            $scope.showExpandButton = false;
          }


          $scope.filterArticles = function(pages) {
            var filteredPages = [];
            angular.forEach(pages, function(value, key){
              // Filter non-articles based on URL
              if ((value.path.split("/").length == 3) && value.title.length > 0) {
                filteredPages.push(value);

                var splitTitle = value.title.split(" - ");
                if (splitTitle.length > 1) {
                    splitTitle.pop();
                }
                value.title = splitTitle.join(' - ');
              }
            });
            return filteredPages;
          }
          var chartbeat =  Chartbeat.get({});
          chartbeat.$promise.then(function(){


            $scope.articles = $scope.filterArticles(chartbeat.pages);

          });
          $interval(function(){
            var chartbeat =  Chartbeat.get({});
            chartbeat.$promise.then(function(){


              $scope.articles = $scope.filterArticles(chartbeat.pages);

            });
          }, 3000);
        }
      }
});


// This directive gets contents from Nodequeue service
app.directive('stiftenNodequeueList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Nodequeue, config) {
          var id  = 0;

          $scope.expandButtonText = 'Vis flere';
          $scope.showExpandButton = false;
          $scope.showAllLink = false;
          $scope.displayed = $attrs.items;
          if ('initial' in $attrs) {
            $scope.displayed = $attrs.initial;
            if ($attrs.initial != $attrs.items) {
                $scope.showExpandButton = true;
            }
          }

          if ('allLink' in $attrs) {
            $scope.allLink = $attrs.allLink;
          }
          if ('allLinkText' in $attrs) {
            $scope.allLinkText = $attrs.allLinkText;
          }

          $scope.imagesize = config.defaultImageSize;
          if ('imagesize' in $attrs) {
            $scope.imagesize = $attrs.imagesize;
          }
          $scope.showTime = true;
          // If an attribute with noTimestamp exists, overwrite.
          if ('noTimestamps' in $attrs) {
            $scope.showTime = false;
          }

          $scope.showMore = function() {
            $scope.displayed = $attrs.items;
            $scope.showExpandButton = false;
            $scope.showAllLink = true;
          }

          /*if ('imagesize' in $attrs) {
            $scope.imagesize = $attrs.imagesize;
          }*/
          // Get id from a parent controller
          if ('list' in $scope && 'id' in $scope.list) {
            id = $scope.list.id;
          }

          // If an attribute with id exists, overwrite.
          if ('id' in $attrs) {
            id = $attrs.id;
          }
          var nodequeue =  Nodequeue.get({id:id, items:$attrs.items, imagesize: $scope.imagesize});
          nodequeue.$promise.then(function(){
            // Filter specific (probably current) article
            if ('filterCurrent' in $attrs) {
                var articles = [];
                angular.forEach(nodequeue.items, function(value, key){
                   if(value.link != $scope.story.link) {
                       articles.push(value);
                   }
                });
                $scope.articles = articles;
            } else {
                $scope.articles = nodequeue.items;
            }


          });
        }
      }
});
// This gets contents from Latest service
app.directive('stiftenLatestList', function() {
    return {
        restrict: 'AEC',
        scope: true,
        controller: function($scope, $attrs, Latest, Term, localStorageService, $interval, config) {
          var id  = 0;
          $scope.displayed = $attrs.items;
          $scope.showExpandButton = false;
          $scope.showAllLink = false;
          $scope.expandButtonText = 'Vis flere';
          $scope.showTime = true;
          // If an attribute with noTimestamp exists, overwrite.
          if ('noTimestamps' in $attrs) {
            $scope.showTime = false;
          }
          if ('allLink' in $attrs) {
            $scope.allLink = $attrs.allLink;
          }
          if ('allLinkText' in $attrs) {
            $scope.allLinkText = $attrs.allLinkText;
          }
          if ('initial' in $attrs) {
            $scope.displayed = $attrs.initial;
            if ($attrs.initial != $attrs.items) {
                $scope.showExpandButton = true;
            }
          }

          $scope.imagesize = config.defaultImageSize;
          if ('imagesize' in $attrs) {
            $scope.imagesize = $attrs.imagesize;
          }

          $scope.showMore = function() {
            $scope.displayed = $attrs.items;
            $scope.showExpandButton = false;
            $scope.showAllLink = true;
          }

          // Get id from a parent controller
          if ('list' in $scope && 'id' in $scope.list) {
            id = $scope.list.id;
          }

          // If an attribute with id exists, overwrite.
          if ('id' in $attrs) {
            id = $attrs.id;
          }

          var articles = localStorageService.get('articles-' + id + '-' + $attrs.items);
          if (articles !== null) {
            $scope.articles = articles;
          }
          var fetcher = Latest;
          if ('no-subs' in $attrs) {
            var fetcher = Term;
          }
          var latest =  fetcher.get({id:id, items:$attrs.items, type:$attrs.type, imagesize: $scope.imagesize});
          latest.$promise.then(function(){
            localStorageService.set('articles-' + id + '-' + $attrs.items, latest.items);
          });
          $interval(function(){
            var latest =  fetcher.get({id:id, items:$attrs.items, type:$attrs.type, imagesize: $scope.imagesize});
            latest.$promise.then(function(){
              $scope.articles = latest.items;
              localStorageService.set('articles-' + id + '-' + $attrs.items, $scope.articles);
            });
          }, 30000);
        }
      }
});
// This gets contents from parent controller
app.directive('stiftenFrontpageArticleList', function() {
    return {
        restrict: 'AEC',
        controller: function($scope, $attrs) {
          $scope.showTime = true;
          $scope.displayed = $attrs.items;
          // If an attribute with noTimestamp exists, overwrite.
          if ('noTimestamps' in $attrs) {
            $scope.showTime = false;
          }
          $scope.$watch('frontpageArticles', function(val) {
            if (typeof val !== 'undefined') {
              if ('offset' in $attrs) {
                $scope.articles = val.splice($attrs.offset, $attrs.items);
              } else {
                $scope.articles = val.splice(0, $attrs.items);
              }

            }
          });

        }
    };
});
// This directive just sets a template
app.directive('stiftenDefaultArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/defaultArticleListTemplate.html',
        controller: function($scope, $attrs) {
            //console.log($attrs);
            // Check for ad-position
            $scope.insertAd = false;
            if ('insertAdPosition' in $attrs) {
                $scope.insertAd = true
                $scope.adPos = $attrs.insertAdPosition;
            }
        }
    };
});
// This directive just sets a template
app.directive('stiftenHeaderArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/headerArticleListTemplate.html',
        scope: true
    };
});
// This directive just sets a template
app.directive('stiftenFeaturedArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/featuredArticleListTemplate.html',
        scope: true
    };
});

// This directive just sets a template
app.directive('stiftenEditorialArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/editorialArticleListTemplate.html',
        scope: true
    };
});

// This directive just sets a template
app.directive('stiftenGalleryArticleList', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/articlelist/galleryArticleListTemplate.html',
        scope: true
    };
});