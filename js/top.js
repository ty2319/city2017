$(function() {
	
	var num = Math.floor(6*Math.random());
	
	$('article > div > div').addClass('move');
	$('article > div').addClass('player'+ num);

	setInterval(function(){
		
		$('article > div > div').removeClass('move');
		$('article > div').removeClass('player'+num);
		
		pre = num;
	
		num = Math.floor(10*Math.random());
		
		if (pre == num) {
			num = num + 1;
			
			if (num == 10) {
				num = 1;
			}
		}
		
		$('article > div > div').addClass('move');
		$('article > div').addClass('player'+num);
	},10000);
	
	// 使用例
	$.getJSON('/symbol/hp/baseball/games/2017/city/js/update.json').done(function(json, status, request) {
		$(json).each(function(i, data) {
				
			var today	= new Date( $.now() ); // 今日の日付を取得
			var ua = navigator.userAgent.toLowerCase();
	
			// iPhone
			var isiPhone = (ua.indexOf('iphone') > -1);
			// iPad
			var isiPad = (ua.indexOf('ipad') > -1);
			// iPod
			var isiPod = (ua.indexOf('ipod') > -1);
			// Android
			var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
			// Android Tablet
			var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);
				
			var elem	= '.' + data.class, // class
				date	= new Date( data.date ), // date
				ago		= date.setDate(date.getDate() + 1); // 更新日 + 1日
	
			if (elem == '.top' && today < ago && !isiPhone && !isiPad && !isiPod) { // 今日(today)がago(更新日 + 1日)より前なら
					
				Push.Permission.request();
				
				Push.create('都市対抗特設サイト', {
				　　body	: 'マスコット、応援ガイドを公開しました。',
				　　icon	: 'icon.gif',
				　　timeout	: 8000, // 通知が消えるタイミング
				　　vibrate	: [100, 100, 100], // モバイル端末でのバイブレーション秒数
				　　onClick	: function() {
				　　　　window.open('http://www.ntt-west.co.jp/symbol/hp/baseball/games/2017/city/mascot.html');
				　　}
				});
			}
		
		});
	});
});

$(window).on('load resize' , function() {
	
	if ($(window).width() > 500) {
		$('main,article').outerHeight($(window).height() - $('header#top').outerHeight() - $('footer').outerHeight());
		$('article').css('padding-top' , $('#global').outerHeight() - 1);
	} else {
		$('article').css('padding-top' , $('article > div').height());
		$('body').css('height' , 'auto');
	}
});