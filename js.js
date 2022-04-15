$('span').hide();
$('footer').css('background-color', 'gray');
$('#fadeout').click(function () {
  $('#one').fadeOut('slow');
});
$('#fadein').click(function () {
  $('#one').fadeIn('slow');
});

$('#append').click(function () {
  $('#two').append('**JQUERY**');
  $(this).off('click');
});

$('p').last().addClass(['selected', 'highlight']);

$('div').html("<span class='red'>Hello <b>Again</b></span>");

$('h1').text('Everything is gonna be ok.');

$('button').click(function () {
  var text = $(this).text();
  $('input').val(text);
});

$('#img').click(function () {
  $('img').show('slow');
  $('#img').css('visibility', 'hidden');
});

$('#mm').click(function () {
  $(this).slideUp('slow', function () {});
});

$(function () {
  $('#changecolor').click(function () {
    $('#three').css('background', 'lightgray');
  });
});
