EmberDeviseBootstrap.PasswordController = Ember.Object.extend({
  email: null,

  signIn: function() {
    Base.userController.contentStates.goToState('signInContent');
    return false;
  },

  resetPassword: function() {
    try {
      email = this.get('email');
      pat = new RegExp(Devise.email_pattern);
      if (email == null) {
        alert('Email is required');
      } else if ( !pat.test(email) ) {
        alert('Email not correctly formed');
      } else {
        $.ajax({
          url: EmberDeviseBootstrap.get('resetPasswordPath')+'.json',
          type: 'POST',
          dataType: 'json',
          data: $.extend(authParams,{
            'user[email]': email}),
          success: function(data) {
            alert('Completed password reset request process: '+ JSON.stringify(data));
          },
          error: function(jqXHR, textStatus, errorThrown) {
            alert('Error completing password reset request: '+textStatus+' error: '+errorThrown);
          }
        });
        $("#sign_in_menu").removeClass('open');
      }
    } catch (ex) {
      alert('Error in processing sign in request: '+ex);
    }
    return false;
  }
});

EmberDeviseBootstrap.passwordController = EmberDeviseBootstrap.PasswordController.create();
