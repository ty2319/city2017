$(document).ready(function(){
	
	if ($(window).width() < 600) {
		$('.accordion').hide();
	}
	
	$('.accordion').css('cursor','pointer');	
	$('.accordion + div').hide().css('margin-bottom','10em');
	
	$('.accordion').on('click', function(){
		$(this).next('div').slideToggle('slow');
	}).toggle(function() {
		$('span' , this).text("※クリックすると上に閉じます。 ▲");
	}, function() {
		$('span' , this).text("※クリックすると下に開きます。 ▼");
	});
	
	$("a[rel=game1],a[rel=game2],a[rel=game3],a[rel=game4],a[rel=game5]").fancybox({
		'padding'		: 0,
		'margin'		: 20,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic',
		'titlePosition'	: 'over',
		'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$('.fancy dt + dd').css('margin',0);
	$('.fancy > dt:first-child').css({'border':'none','margin-top': 0,'padding-top': '1em'});	
	
	$('.half > ul').photobox('a', {thumbs:true});
	$('.half > ul li').height($('.half > ul li').width());
	
}); 
