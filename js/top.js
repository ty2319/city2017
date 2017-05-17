$(function() {
	
	var num = Math.floor(2*Math.random());
	
	$('article > div > div').addClass('move');
	$('article > div').addClass('player'+ num);

	setInterval(function(){
		
		$('article > div > div').removeClass('move');
		$('article > div').removeClass('player'+num);
		
		pre = num;
	
		num = Math.floor(2*Math.random());
		
		if (pre == num) {
			num = num + 1;
			
			if (num == 1) {
				num = 0;
			}
		}
		
		$('article > div > div').addClass('move');
		$('article > div').addClass('player'+num);
	},10000);
});

$(window).on('load resize' , function() {
	
	if ($(window).width() > 500) {
		$('main,article').height($(window).height() - $('header#top').outerHeight() - $('footer').outerHeight());
		$('article').css('padding-top' , $('#global').outerHeight() - 6);
	} else {
		$('article').height($(this).children().height());
	}});