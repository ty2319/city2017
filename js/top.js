$(function() {
	
	$('section').hover(function() {	
		$(this).prepend('<div id="modal"></div>');
		$('div#modal').height($(this).parent().height());
	} , function() {
		$('div#modal' , this).remove();
	});
	
	var num = Math.floor(2*Math.random());
	
	$('article > div').addClass('player'+ num);
	$('article > div > div').addClass('move');

	setInterval(function(){	
	
		$('article > div').removeClass('player'+num);
		$('article > div > div').removeClass('move');
		
		pre = num;
	
		num = Math.floor(2*Math.random());
		
		if (pre == num) {
			num = num + 1;
			
			if (num == 1) {
				num = 0;
			}
		}
		
		$('article > div').addClass('player'+num);
		$('article > div > div').addClass('move');
	},10000);
});

$(window).on('load resize' , function() {	
	
	if ($(window).width() > 500) {
		$('main,article').height($(window).height() - $('header#top').outerHeight() - $('#global').outerHeight() - $('footer').outerHeight() + 6);
		$('main').css('margin-top' , $('#global').outerHeight() - 6);
		$('article > div').show();
	} else {
		$('article > div').hide();
		$('article').height($(this).children().height());
	}});