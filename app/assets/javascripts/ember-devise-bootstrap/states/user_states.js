
//
// This state machine tracks the user for signed in and signed out states and
// controls the contents of the nav bar menu for account management
//
EmberDeviseBootstrap.userController.set('userStates', Ember.StateManager.create({
  rootElement: '#navbar-container',

  initialState: function() {
    if (EmberDeviseBootstrap.get('isSignedIn')) {
      return 'signedIn';
    } else {
      return 'signedOut';
    }
  }.property("EmberDeviseBootstrap.isSignedIn"),

  signedOut: Ember.ViewState.create({
    view: EmberDeviseBootstrap.SignedOutView.create({}),
    enter: function(manager, transition) {
      this._super(manager, transition);
      if (typeof EmberDeviseBootstrap.getPath('userController.contentStates') !== 'undefined') {
        EmberDeviseBootstrap.getPath('userController.contentStates').goToState('signInContent');
      }
    }
  }),

  signedIn: Ember.ViewState.create({
    view: EmberDeviseBootstrap.SignedInView.create({})
  }),
}));

//
// This state machine tracks the content shown in the sign in drop down menu allowing
// it to show either a sign in form or a forgot password form.  Switching between the
// content states is done in actions on the controller.
//
EmberDeviseBootstrap.userController.set('contentStates', Ember.StateManager.create({
    rootView: EmberDeviseBootstrap.getPath('userController.userStates.signedOut.view'),
    initialState: "signInContent",
    signInContent: Ember.State.create({
    }),
    passwordContent: Ember.State.create({
    })
  })
);
