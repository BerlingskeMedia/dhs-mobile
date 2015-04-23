'use strict';

app.factory('PreprocesAlertArticle', function() {
  return function(item) {
    // Find presentation tags
    if ('fields' in item) {
      for (var x=0; x < item.fields.length; x++) {
        if (item.fields[x].attributes.keys == 'p_tag') {
          if (item.fields[x].attributes.label == 328917) {
          // Breaking, presentation tag
            item.alertType = 'alert-breaking';
            item.alertLabel = 'Breaking';
          }
          // Just-now, presentation tag
          if (item.fields[x].attributes.label == 328920) {

            item.alertType = 'alert-justnow';
            item.alertLabel = 'Netop nu';
          }
        }
      }
    }
    return item;
  }
});


app.factory('PreprocesArticle', function(ContentItemById, localStorageService, $sce) {
  return function(scope) {
    // Always trust html, so video tags do not get stripped.
    scope.story.content = $sce.trustAsHtml(scope.story.content);

    // Find related content

    if ('story' in scope && 'related' in scope.story) {

      for (var x=0; x < scope.story.related.length; x++) {

        // Extract fact-box
        if (scope.story.related[x]['value'].content_type == 'facts') {
          var nid = scope.story.related[x]['value'][0]['value'];
          scope.story.factId = nid;
        }
        // Extract fact-box
        if (scope.story.related[x]['value'].content_type == 'news_article') {
          if (!('relatedStories' in scope.story)) {
            scope.story.relatedStories = [];
          }
          scope.story.relatedStories.push(scope.story.related[x]['value']);

        }

      }
    }
  }
});
