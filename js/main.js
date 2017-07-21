$(document).ready(function () {
  // NAV BAR MENU

  delete Hammer.defaults.cssProps.userSelect;

  var hammertime = new Hammer(document.body);
  hammertime.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});

  hammertime.on("swipeleft", function () {
    $('#content').removeClass('menu-opened');
  });

  hammertime.on("swiperight", function () {
    $('#content').addClass('menu-opened');
  });

  $('body').click(function (e) {
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
  $("#menu-bars").click(function () {
    $('#content').toggleClass('menu-opened');
  })

  // VIDEOS
  var videoIds = {
    "dai-overview": 225643431,
    "dai-stablecoin-system": 225643573,
    "mkr-governance-token": 225643767
  };

  $('.js-show-vid').click(function (e) {
    e.preventDefault();
    var vidName = $(this).data('vid');
    var id = videoIds[vidName];
    if (!id) {
      console.error('Invalid video name "' + vidName + '"');
      return;
    }
    $('#videos').html('<div class="video-background">' +
      '<i class="fa fa-times close-vid-btn" aria-hidden="true"></i>' +
      '<iframe src="https://player.vimeo.com/video/' + id + '?autoplay=1" ' +
      'width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>' +
      '</iframe></div>');
    $('.close-vid-btn,.video-background').click(function () {
      $('#videos').html('');
    })
  })

  // SVG fallback
  if (!Modernizr.svgasimg) {
    $("#logo").attr("src", "assets/img/MKR-logo-rounded.png");
  }

  // Old browser warning
  $('.close-warning-btn').click(function() {
    $('.browserupgrade-grid').hide();
  })
});
