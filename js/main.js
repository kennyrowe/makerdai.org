
$(function() {
  // NAV BAR MENU
  $('body').click(function(e) {
    var menuClicked;
    if ($(e.target).hasClass('menu-category')) {
      menuClicked = $(e.target).parent();
    }
    if ($(e.target).parent().hasClass('menu-category')) { // caret clicked
      menuClicked = $(e.target).parent().parent();
    }
    if (menuClicked) {
      if (!menuClicked.hasClass('active')) {
        $('.menu-container').removeClass('active')
      }
      menuClicked.toggleClass('active')
    } else {
      $('.menu-container').removeClass('active')
    }
  })

  // MOBILE MENU
  $("#menu-bars").click(function() {
    $('#main-grid').toggleClass('menu-opened');
  })

})
