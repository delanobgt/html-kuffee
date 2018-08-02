let nav = (function() {
  let $nav = $("#nav");
  let $btnLogin = $('#btn_login');
  let $btnSignup = $('#btn_signup');

  //scroll events
  $(window).scroll(function() {    
      let offset = $(window).scrollTop();
      if (offset >= 200) {
        $nav.removeClass('first-nav');
        $nav.addClass('second-nav');
        $btnLogin.removeClass('btn-blue');
        $btnLogin.addClass('btn-white');
        $btnSignup.removeClass('btn-blue-hollow');
        $btnSignup.addClass('btn-white-hollow');
      } else {
        $nav.removeClass('second-nav');
        $nav.addClass('first-nav');
        $btnLogin.removeClass('btn-white');
        $btnLogin.addClass('btn-blue');
        $btnSignup.removeClass('btn-white-hollow');
        $btnSignup.addClass('btn-blue-hollow');
      }
  });

  //loggedIn state handler
  (function() {
    let user = Cookies.getJSON('user');
    if (user && user.loggedIn) {
      $('#btn_login').hide();
      $('#btn_signup').hide();
      $('#btn_logout').show();
      $('#span_user').show();
    } else {
      $('#btn_login').show();
      $('#btn_signup').show();
      $('#btn_logout').hide();
      $('#span_user').hide();
    }
  })();

  //form summoning
  let $formPlatform = $('#form_platform');
  let $divSignupForm = $('#div_signup_form');
  let $divLoginForm = $('#div_login_form');

  //login event button
  function showLoginForm() {
    $divSignupForm.hide('fast', () => {
      $formPlatform.fadeIn('normal', () => {
        $divLoginForm.slideDown('normal');
      });
    });
  }
  $btnLogin.click(() => {
    showLoginForm()
  });

  //singup button event
  function showSignupForm() {
    $divLoginForm.hide('fast', () => {
      $formPlatform.fadeIn('normal', () => {
        $divSignupForm.slideDown('normal');
      });
    });
  }
  $btnSignup.click(() => {
    showSignupForm();
  });

  //logout button
  let logoutToHome = false;
  function setLogoutToHome(flag) {
    logoutToHome = flag;
  }
  $('#btn_logout').click(() => {
    let user = Cookies.getJSON('user');
    if (user) {
      user.loggedIn = false;
      Cookies.set('user', user, {expires: 30});
      if (logoutToHome) {
        window.location = window.location + '/../../index.html';
      } else {
        window.location.reload(false);
      }
    }
  });

  //right navbar links
  $('#link_wishlist, #link_mycart').click((e) => {
    let user = Cookies.getJSON('user');
    if (user && user.loggedIn) {
      //do nothing
    } else {
      e.preventDefault();
      showLoginForm();
    }
  });

  function unbindScroll() {
    $(window).unbind('scroll');
    $nav.removeClass('first-nav');
    $nav.addClass('second-nav');
    $btnLogin.removeClass('btn-blue');
    $btnLogin.addClass('btn-white');
    $btnSignup.removeClass('btn-blue-hollow');
    $btnSignup.addClass('btn-white-hollow');
  }

  return {
    setLogoutToHome: setLogoutToHome,
    unbindScroll: unbindScroll,
    showLoginForm: showLoginForm,
    showSignupForm: showSignupForm
  };
})();

