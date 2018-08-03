(function() {
  let $formPlatform = $('#form_platform');
  let $divLoginForm = $('#div_login_form');
  let $divSignupForm = $('#div_signup_form');

  //signupfirst button
  let $btnSignupFirst = $('#btn_signup_first');
  $btnSignupFirst.click(() => {
    $divLoginForm.fadeOut('normal', () => {
      $divSignupForm.slideDown('normal', () => {
        resetForm();
      });
    });
  });
  //loginfirst button
  let $btnLoginFirst = $('#btn_login_first');
  $btnLoginFirst.click(() => {
    $divSignupForm.fadeOut('normal', () => {
      $divLoginForm.slideDown('normal', () => {
        resetForm();
      });
    });
  });

  //form closer button
  let $closer = $('.closer');
  $closer.click(() => {
    $formPlatform.fadeOut('normal', () => {
      resetForm();
    });
  });

  let $loginForm = $divLoginForm.find('form');
  let $signupForm = $divSignupForm.find('form');
  function resetForm() {
    $loginForm.trigger('reset');
    $signupForm.trigger('reset');
  }

  $loginForm.on('submit', (err) => {
    err.preventDefault();
    let user = Cookies.getJSON('user');
    let inputEmail = $loginForm.find('input[type="email"]').val();
    let inputPassword = $loginForm.find('input[type="password"]').val();
    if (user && user.email === inputEmail & user.password === inputPassword) {
      user.loggedIn = true;
      Cookies.set('user', user, {expires: 30});
      window.location.reload(false);
    } else {
      toaster.show('Wrong Email / Password', 'crimson');
    }
  });

  $signupForm.on('submit', (err) => {
    Cookies.set('user', {
      loggedIn: true,
      name: $signupForm.find('input[type="text"]').val(),
      email: $signupForm.find('input[type="email"]').val(),
      password: $signupForm.find('input[type="password"]').val()
    }, {expires: 30});
  });
})();