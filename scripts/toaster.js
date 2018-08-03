let toaster = (function() {
  let $sectionToaster = $('#section_toaster');

  function show(msg, bgColor) {
    let $newToaster = $('<div class="toaster"></div>');
    $newToaster.html(msg).css({backgroundColor: bgColor}).hide();

    $sectionToaster.prepend($newToaster);
    $newToaster.fadeIn('normal');

    setTimeout(function() {
      $newToaster.fadeOut('normal');
    }, 1500);
  }

  return {
    show: show
  };
})();