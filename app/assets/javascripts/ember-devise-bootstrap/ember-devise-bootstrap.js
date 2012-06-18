//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./states
//= require_tree ./helpers

EmberDeviseBootstrap = Ember.Namespace.create({
  version: '0.0.1',
  currentUser: {},
  //
  // Property indicating if there is a signed in current user
  //
  isSignedIn: Ember.computed(function(key, value) {
    if (arguments.length == 1) {
      return typeof EmberDeviseBootstrap.get('currentUser') != 'undefined' &&
        EmberDeviseBootstrap.getPath('currentUser.email') != null;
    }
  }).property('currentUser.email'),
  //
  // Action method to display account details,
  // Override in applications with your own function
  //
  showAccount: function() {
    $("#account_menu").removeClass('open');
    alert('open account action TBD');
    return false;
  },
  //
  // Action to sign out the current user
  //
  signOut: function() {
    jQuery.ajax({
      url: EmberDeviseBootstrap.get('signOutPath')+'.json',
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        EmberDeviseBootstrap.currentUser.set('email', null);
        EmberDeviseBootstrap.currentUser.set('id', null);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert('Error completing sign out: '+textStatus+' error: '+errorThrown);
      }
    });
    return false;
  }
});
