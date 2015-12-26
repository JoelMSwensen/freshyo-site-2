(function(){

/*Controllers*/

var freshYoApp = angular.module('freshYoApp', ['freshYoMurch']);

freshYoApp.controller('AlbumListCtrl', function($scope) {
  $scope.albums = [
    {
      'name': 'Novanta - FY! 037/42 032',
      'artist': 'Go Dugong',
      'image': 'img/nova.jpg',
      'url': 'http://freshyolabel.bandcamp.com/album/novanta-fy-037-42-032',
      'description': '\“NOVANTA\” è un inno alla mescolanza.',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Plush & Safe - FY!036 / LTI023',
      'artist': 'Godblesscomputers',
      'image': 'img/push-and-save.jpg',
      'url': 'http://freshyolabel.bandcamp.com/album/plush-safe-fy-036-lti023',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Fermati, O Sole - FY!035/TRB039/BP',
      'artist': 'K-Conjog',
      'image': 'img/fermati-o-sole.jpg',
      'url': 'http://freshyolabel.bandcamp.com/album/fermati-o-sole-fy-035-trb039-bp',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Le Furie - FY!033',
      'artist': 'Tribuna Ludu',
      'image': 'img/le-furie.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'A Love Explosion - FY!032',
      'artist': 'Go Dugong',
      'image': 'img/a-love-explosion.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Fuoco! (sul Quartier Generale) e.p. - FY!031',
      'artist': 'Tribuna Ludu',
      'image': 'img/fuoco.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'CORTELLAHA 2​.​0 - FY​!​030',
      'artist': 'Millelemmi',
      'image': 'img/CORT.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Appaloosa Remix, Vol. 2 (The Worst of Saturday Night Remixes) - FY​!​029',
      'artist': 'Appaloosa',
      'image': 'img/Appa.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Arousal - FY​!​028',
      'artist': 'Kali - Kappah',
      'image': 'img/Arousal.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': '9 Tales about Galastrophy - FY​!​027',
      'artist': 'Earthquake Island',
      'image': 'img/9-Tales.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'The Christmas Song - FY​!​026',
      'artist': 'Dre Love + Digi',
      'image': 'img/xmas.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Truly Beautiful - single - FY​!​025',
      'artist': 'Dre Love',
      'image': 'img/dre-love.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'UNTIDY TILES - FY​!​024',
      'artist': 'HLMNSRA',
      'image': 'img/untidy.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Arousal - FY​!​028',
      'artist': 'Kali - Kappah',
      'image': 'img/Arousal.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'The case of Galastrophy - FY​!​023',
      'artist': 'Earthquake Island',
      'image': 'img/the-case.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'CORTELLAHA - FY​!​022',
      'artist': 'MILLELEMMI',
      'image': 'img/cortel.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Spazionauta e​.​p. - FY​!​021',
      'artist': '1000lemmi + Biga',
      'image': 'img/spaz.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Lost in downtown (The Beastie Boys re​-​works) - FY​!​020',
      'artist': 'Godblesscomputers',
      'image': 'img/cortel.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Red Signal - FY​​!​​019',
      'artist': 'Rue Analogique, 11',
      'image': 'img/red.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'ARCADIA: choral poem - FY​​!​​018',
      'artist': 'AA.VV.',
      'image': 'img/arcadia.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'CAS L​.​A. / ISOL8 (single + vinyl) - FY​!​V001',
      'artist': 'Colossius',
      'image': 'img/cortel.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Tyrchisk Päbbar - FY​!​017',
      'artist': 'Nennepenne & Moffpoff​',
      'image': 'img/tyrch.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Swanism - FY​!​016',
      'artist': 'Godblesscomputers',
      'image': 'img/swan.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': '4 ENZO B​.​I​.​G - FY​!​015',
      'artist': 'Colossius',
      'image': 'img/4-enzo.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'A Love Continuum - FY​!​014',
      'artist': 'AA.VV.',
      'image': 'img/a-love.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Submission To The Great Lens - FY​!​013',
      'artist': 'Infinite Livez',
      'image': 'img/submission.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'DOGMA7 - FY​!​012',
      'artist': 'Digi G\'alessio',
      'image': 'img/dogma.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'An Unremarkable Pair Of Lungs - FY​!​011',
      'artist': 'Joel Swensen',
      'image': 'img/an-un.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Black Music For White People - FY​!​010',
      'artist': 'DJ 0.000001',
      'image': 'img/black.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Cracks In The Great Lens - FY​!​009',
      'artist': 'Infinite Livez',
      'image': 'img/cracks.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'E​.​P. telefono casa - FY​!​008',
      'artist': 'Colossius & Digi G\'Alessio',
      'image': 'img/e-p.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'About to be a man - FY​!​007',
      'artist': 'ECHO',
      'image': 'img/about.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'Girls Ain\'t Nothing But Trouble (DJ 0​.​000001 Remix) - FY​!​006',
      'artist': 'DJ Jazzy Jeff & The Fresh Prince',
      'image': 'img/girls.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'International love - FY​!​005',
      'artist': 'Cute Gansta Crew',
      'image': 'img/international.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'We are going to Ibiza - FY​!​004',
      'artist': 'Rich & Stu',
      'image': 'img/we-are.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'wOAw compilation 02 Dub & Breaks - FY​!​002',
      'artist': 'SUZYWAN & Various Artists',
      'image': 'img/woaw-blue.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'wOAw compilation 03 Experiments - FY​!​003',
      'artist': 'SUZYWAN & Various Artists',
      'image': 'img/woaw-black.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    },
    {
      'name': 'wOAw compilation 01 Skweee & Beats - FY​!​001',
      'artist': 'SUZYWAN & Various Artists',
      'image': 'img/woaw-yellow.jpg',
      'url': '#',
      'cast': 'http://joelswensen.com/For-Simone/I%20Forgot%20the%20Reasons.mp3'
    }
  ];
});
})();
