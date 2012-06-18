EmberDeviseBootstrap.UserController = Ember.Object.extend({
  currentUserBinding: "EmberDeviseBootstrap.currentUser",
  userStates: null
});

EmberDeviseBootstrap.userController = EmberDeviseBootstrap.UserController.create();

EmberDeviseBootstrap.addObserver('isSignedIn', function() {
  if (EmberDeviseBootstrap.get('isSignedIn')) {
    EmberDeviseBootstrap.userController.get('userStates').goToState('signedIn');
  } else {
    EmberDeviseBootstrap.userController.get('userStates').goToState('signedOut');
  }
});
