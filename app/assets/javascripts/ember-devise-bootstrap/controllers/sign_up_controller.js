EmberDeviseBootstrap.SignUpController = Ember.Object.extend({
  email: null,
  password: null,
  passwordConfirmation: null,

  //
  // This action performs the sign up request with the provided
  // credentials from the form.
  //
  signUp: function() {
    try {
      email = this.get('email');
      password = this.get('password');
      confirm = this.get('passwordConfirmation');
      pat = new RegExp(Devise.email_pattern);
      if (email == null) {
        alert('Email is required');
      } else if (password == null || confirm == null) {
        alert('Password and confirmation are required');
      } else if (password != confirm) {
        alert('Password and confirmation must match');
      } else if (password.length < Devise.password_length.min ||
        password.length > Devise.password_length.max) {
        alert('Password must be at least '+Devise.password_length.min+
          ' and shorter than '+Devise.password_length.max);
      } else if ( !pat.test(email) ) {
        alert('Email not correctly formed');
      } else {
        $.ajax({
          url: EmberDeviseBootstrap.get('signUpPath')+'.json',
          type: 'POST',
          dataType: 'json',
          data: $.extend(authParams,{
            'user[email]': email,
            'user[password]': password,
            'user[password_confirmation]': confirm}),
          success: function(data) {
            //alert('Completed sign up process: '+ JSON.stringify(data));
            EmberDeviseBootstrap.currentUser.set('email', data.email);
            EmberDeviseBootstrap.currentUser.set('id', data.id);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            alert('Error completing sign up: '+textStatus+' error: '+errorThrown);
          }
        });
        $("#sign_up_menu").removeClass('open');
      }
    } catch (ex) {
      alert('Error in validation: '+ex);
    }
    return false;
  }

});

EmberDeviseBootstrap.signUpController = EmberDeviseBootstrap.SignUpController.create();
