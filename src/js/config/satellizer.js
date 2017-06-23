angular
  .module('githubAuth')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {

  $authProvider.github({
    url: '/api/oauth/github',
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    redirectUri: window.location.origin, // we changed this
    optionalUrlParams: ['scope'],
    scope: ['user:email'],
    scopeDelimiter: ' ',
    oauthType: '2.0',
    popupOptions: { width: 1020, height: 618 }
  });


  $authProvider.github({
    clientId: 'd2cfd327c82736a6383d',
    url: '/api/oauth/github'
  });
}
