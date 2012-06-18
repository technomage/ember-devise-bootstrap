EmberDeviseBootstrap.SignInController = Ember.Object.extend({
  email: null,
  password: null,
  rememberMe: false,

  //
  // This action switches the content of the sign in menu to that for
  // forgotten password, allowing a reset email to be requested.
  //
  forgotPassword: function() {
    EmberDeviseBootstrap.userController.contentStates.goToState('passwordContent');
    return false;
  },

  //
  // This action performs the sign in request with the provided credentials from the form.
  //
  signIn: function() {
    try {
      email = this.get('email');
      password = this.get('password');
      remember = this.get('rememberMe');
      pat = new RegExp(Devise.email_pattern);
      if (email == null) {
        alert('Email is required');
      } else if (password == null) {
        alert('Password and confirmation are required');
      } else if (password.length < Devise.password_length.min ||
        password.length > Devise.password_length.max) {
        alert('Password must be at lest '+Devise.password_length.min+
          ' and shorter than '+Devise.password_length.max);
      } else if ( !pat.test(email) ) {
        alert('Email not correctly formed');
      } else {
        $.ajax({
          url: EmberDeviseBootstrap.get('signInPath')+'.json',
          type: 'POST',
          dataType: 'json',
          data: $.extend(authParams,{
            'user[email]': email,
            'user[password]': password,
            'user[remember_me]': remember}),
          success: function(data) {
            //alert('Completed sign up process: '+ JSON.stringify(data));
            EmberDeviseBootstrap.currentUser.set('email', data.email);
            EmberDeviseBootstrap.currentUser.set('id', data.id);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            alert('Error completing sign up: '+textStatus+' error: '+errorThrown);
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

EmberDeviseBootstrap.signInController = EmberDeviseBootstrap.SignInController.create();
