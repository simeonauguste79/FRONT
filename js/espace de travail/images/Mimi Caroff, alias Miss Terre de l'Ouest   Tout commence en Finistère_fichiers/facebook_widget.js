(function ($, Drupal) {

	var sanitizeFbUrl = function(fbUrl) {
		try {
			var a = document.createElement('a');
			a.href = fbUrl;
			fbUrl = a.href;
			index = fbUrl.indexOf('facebook.com/');
			if(index > -1) {
				fbUrl = fbUrl.substring(index+13);
				fbUrl = fbUrl.replace(/\?.*$/,'');
				fbUrl = fbUrl.replace('/#.*$/','');
				fbUrl = fbUrl.split('/')[0];
				return 'https://facebook.com/' + fbUrl;
			}
		} catch(e) {
			console.error(e);
			return null;
		}
	};

	$(document).ready(function() {

		$('.fb_widget').each(function(i, el){
			el = $(el);
			var fbUrl = el.attr('fb-url');
			if(fbUrl) {
				fbUrl = sanitizeFbUrl(fbUrl);
			}

			var w = el.width();
			var h = el.height();

			//cf. https://developers.facebook.com/docs/plugins/page-plugin

			var iframeSrc = 'https://www.facebook.com/v3.0/plugins/page.php?'
			iframeSrc += 'width='+ w +'&';
			iframeSrc += 'height=' + h +'&';
			iframeSrc += 'adapt_container_width=true&';
			iframeSrc += 'app_id=&';
			iframeSrc += 'hide_cover=true&';
			iframeSrc += 'show_facepile=false&';
			iframeSrc += 'small_header=true&';
			iframeSrc += 'tabs=timeline&'; // timeline,events, messages
			iframeSrc += 'href=' + encodeURIComponent(fbUrl);

			el.html('');
			$('<iframe/>').attr('src', iframeSrc).appendTo(el);
			
		});
	});

}(jQuery, Drupal));