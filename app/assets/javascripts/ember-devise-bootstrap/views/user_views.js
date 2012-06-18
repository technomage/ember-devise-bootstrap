EmberDeviseBootstrap.SignedInView = Ember.View.extend({
  templateName: "ember-devise-bootstrap/templates/signed_in",
  classNames: ['inline', 'nav', 'pull-right'],
  tagName: 'ul'
});

EmberDeviseBootstrap.SignedOutView = Ember.View.extend({
  templateName: "ember-devise-bootstrap/templates/signed_out",
  classNames: ['inline', 'nav', 'pull-right'],
  tagName: 'ul',

  signUpView: Ember.View.extend({
    templateName: "ember-devise-bootstrap/templates/sign_up_form"
  }),

  isSignInContent: function() {
    return EmberDeviseBootstrap.userController.getPath('contentStates.currentState.name') == 'signInContent';
  }.property("EmberDeviseBootstrap.userController.contentStates.currentState.name")

});

EmberDeviseBootstrap.SignInContentView = Ember.View.extend({
  templateName: "ember-devise-bootstrap/templates/sign_in_form"
});

EmberDeviseBootstrap.PasswordContentView = Ember.View.extend({
  templateName: "ember-devise-bootstrap/templates/forgot_password_form"
});
