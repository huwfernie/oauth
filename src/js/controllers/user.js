angular
  .module('githubAuth')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['$auth', 'User', '$state'];
function ProfileCtrl($auth, User, $state) {
  const vm = this;

  const { userId } = $auth.getPayload();

  if(userId) vm.user = User.get({ id: userId });

  vm.logout = logout;

  function logout() {
    $auth.logout();
    $state.go('login');
  }
}