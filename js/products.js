(function(){
  var app = angular.module('site-products', [ ]);

  app.directive('albumGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'album-gallery.html'
    };
  });
})();
