  $(document).ready(function() {

  $('.selectpicker').selectpicker();

    var toggled = $('.js-togglable');
    var cont = $('.js-arrowbox-wrapper');
    var mainDiv = $('.bottomOffset' );

    $(toggled).hide();
    $(cont).hide();

    $('.js-slidetoggle').click(function(e) {
        $(this).next('div.js-togglable').slideToggle('fast');
      });

    $('#js-arrowbox-button').toggle(function() {
      mainDiv.animate({
        marginTop: '+='+(cont.height() + 10) + 'px'
      }, 500);
    },function() {
      mainDiv.animate({
        marginTop: '-='+(cont.height() + 10) + 'px'
      }, 500);
    });

    $('#js-arrowbox-button').click(function(e) {
      $(cont).slideToggle('slow');
      e.preventDefault();
    });
  });