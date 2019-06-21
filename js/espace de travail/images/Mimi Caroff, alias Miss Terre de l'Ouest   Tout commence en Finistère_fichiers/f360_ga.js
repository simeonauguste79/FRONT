(function($, Drupal, drupalSettings) {

        //tracking des liens vers des sites externes (non pub)
/*
        $('a').filter(function(){
		try {
			return this.hostname && this.hostname !== location.hostname;
		} catch(e) {
			return false;
		}
	})
	.on("click", function(){
                    var href = this.href;
		    ga('send', 'event', 'outbound', 'click', href, {
			transport: 'beacon',
			'hitCallback': function(){ document.location = href; }
		    });
                    return true;
	});
*/
	// tracking des liens des publicités
	$(".advBlock").on("click", function(e) {
	    ga('send', 'event', {
	        eventCategory: 'RegiePub',
	        eventAction: 'click_PUB',
	        eventLabel: ($(this).data("href")).split("?")[0],
	        transport: 'beacon'
	    });
            return true;
	});

}(jQuery, Drupal, drupalSettings));

