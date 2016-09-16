$(document).ready(function(){
  $('.tweet-compose-new').focus(function() {
    //$('#tweet-controls').css('display', 'inline-block');
    $('#tweet-controls').show();
    $('.tweet-compose-new').css('height', '5em');
  });

  $('.tweet-compose-new').blur(function() {
    $('#tweet-controls').hide();
    $('.tweet-compose-new').css('height', '2.5em');
  });


  var maxChar = 140;

  $('#char-count').text(maxChar);

  $('.tweet-compose-new').bind('keyup keydown', function() {
    var count = $('#char-count');
    var characters = $(this).val().length;

    if(characters > maxChar) {
      //count.addClass('.over');
      count.css('color', 'red');
      $('#tweet-submit').prop('disabled', true);
    }
    else {
      //count.removeClass('.over');
      count.css('color', '#999');
      $('#tweet-submit').prop('disabled', false);
    }

    count.text(maxChar - characters);
  });

});
