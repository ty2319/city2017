$(function() {
	
	var num = Math.floor(6*Math.random());
	
	$('article > div > div').addClass('move');
	$('article > div').addClass('player'+ num);

	setInterval(function(){
		
		$('article > div > div').removeClass('move');
		$('article > div').removeClass('player'+num);
		
		pre = num;
	
		num = Math.floor(9*Math.random());
		
		if (pre == num) {
			num = num + 1;
			
			if (num == 9) {
				num = 1;
			}
		}
		
		$('article > div > div').addClass('move');
		$('article > div').addClass('player'+num);
	},10000);
});

$(window).on('load resize' , function() {
	
	if ($(window).width() > 500) {
		$('main,article').outerHeight($(window).height() - $('header#top').outerHeight() - $('footer').outerHeight());
		$('article').css('padding-top' , $('#global').outerHeight());
	} else {
		$('article').css('padding-top' , $('article > div').height());
		$('body').css('height' , 'auto');
	}
});