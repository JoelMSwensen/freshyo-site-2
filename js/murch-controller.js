(function(){

/*Controllers*/

var freshYoMurch = angular.module('freshYoMurch', []);

freshYoMurch.controller('MurchListCtrl', function($scope) {
  $scope.items = [
    {
      'name': 'Plush & Safe - FY!036 / LTI023 – Limited edition cd',
      'artist': 'Godblesscomputers',
      'image': 'img/nova.jpg',
      'url': 'http://freshyolabel.bandcamp.com/album/novanta-fy-037-42-032',
      'description': '\“NOVANTA\” è un inno alla mescolanza.',
      'type': 'Compact Disc (CD)',
      'price': '10.00'
    },
    {
      'name': 'Plush & Safe',
      'artist': 'Godblesscomputers',
      'image': 'img/push-and-save.jpg',
      'url': 'http://freshyolabel.bandcamp.com/album/plush-safe-fy-036-lti023'

    }
  ];
});
})();
