angular
  .module('githubAuth')
  .controller('LoginCtrl', LoginCtrl);


LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(() => $state.go('profile'));
  }

  vm.authenticate = authenticate;
}
