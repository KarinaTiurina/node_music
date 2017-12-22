$(document).ready(function () {
    $('#valtorna_inf_btn').click(function () {

    })
}).bind('ajaxError', function (e, xhr, opt) {
  $('<p class="json_error">Ошибка считывания файла</p>').insertAfter('h1');
  blink('.json_error');
}).bind('ajaxSuccess', function (e, xhr, opt) {
	alert("sdkjfksdj");
    $('.json_error').detach();
});

$(document).ready(function () {
    $('#trombon_inf_btn').click(function () {
        
    })
}).bind('ajaxError', function (e, xhr, opt) {
  $('<p class="json_error">Ошибка считывания файла</p>').insertAfter('h1');
  blink('.json_error');
}).bind('ajaxSuccess', function (e, xhr, opt) {
    $('.json_error').detach();
});

function blink(selector) {
  $(selector).fadeOut('slow',function() {
    $(this).fadeIn('slow',function() {
      blink(this);
    });
  });
}

