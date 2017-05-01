$(function() {
	
	if ($(window).width() > 500) {
		$('main,article').height($(window).height() - $('header#top').height() - $('h2 img').height() - $('footer').height());
		$('article > div').show().height($('article').height());
	} else {
		$('article > div').hide();
		$('article').height($(this).children().height());
	}
	
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