$(function() {
  let $nav = $("#nav");
  let $btnLogin = $('#btn_login');
  let $btnSignup = $('#btn_signup');
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
});

