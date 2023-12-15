$('#target-1').removeClass('border');

// 2
$('#target-1').css('left', '250px');

// 3
$('.target-2').removeClass('border').addClass('blue');

// 4
$('.target-2').css({ 'left': 50, 'margin-top': '-15px' })

// 5
$('#target-3').fadeOut(() => $('#target-4').addClass('green'));