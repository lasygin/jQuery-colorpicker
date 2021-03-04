$(function () {
  $('.widget button').button();
  $('button').first().button('option', 'disabled', true);
  $('button').click(function (event) {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');
    $(event.currentTarget).button('option', 'disabled', true);
    $(event.currentTarget).siblings().button('option', 'disabled', false);
    refreshSwatch();
  });

  function hexFromRGB(r, g, b) {
    var hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (el, val) {
      if (val.length === 1) {
        hex[el] = '0' + val;
      }
    });
    return hex.join('').toUpperCase();
  }

  function refreshSwatch() {
    var prop = $('.active').html();
    var red = $('#red').slider('value'),
      green = $('#green').slider('value'),
      blue = $('#blue').slider('value'),
      hex = hexFromRGB(red, green, blue);
    $('#swatch').css(`${prop}`, '#' + hex);
  }

  $('#red, #green, #blue').slider({
    orientation: 'horizontal',
    range: 'min',
    max: 255,
    value: 0,
    slide: refreshSwatch,
    change: refreshSwatch,
  });
});
