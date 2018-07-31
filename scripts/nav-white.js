$(function() {
  let $nav = $("#nav");
  let $btnLogin = $('#btn_login');
  let $btnSignup = $('#btn_signup');
  $(window).scroll(function() {    
      let offset = $(window).scrollTop();
      if (offset >= 200) {
        $nav.removeClass('first-nav');
        $nav.addClass('second-nav');
      } else {
        $nav.removeClass('second-nav');
        $nav.addClass('first-nav');
      }
  });
});

