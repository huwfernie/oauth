angular
  .module('githubAuth')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'js/views/login.html'
      
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'js/views/profile.html',
      controller: 'ProfileCtrl as profile'
    });

  $urlRouterProvider.otherwise('/');
}
