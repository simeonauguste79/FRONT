(function($, Drupal) {

	/**
	 * Utilitaires pour gérer les popups Youtube
	 */
	class YoutubeUtils {

		/**
		 * Constructeur
		 */
		constructor() {
			this.player = [];
			this.currentPlayer = 0;

			// console.log("== YoutubeUtils initialized ==");
		}


		/**
		 * Load youtube API
		 */
		loadApi() {
			// Load Youtube Api
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		}


		/**
		 * Initialiaze the youtube popup for the home page
		 */
        initHomePopup() {
        	var _this = this;
            var videoId = $("div.immersive-header div.launchYoutubeHome").attr('data-youtubeId');
            if (!videoId)
                return;
            $("#youtube-popup").append("<div id='player'></div>");
            this.player = new YT.Player('player', {
                videoId: videoId
            });
            
            $("div.immersive-header div.launchYoutubeHome").on('click',function() {
                $("div.immersive-header video").hide();
                $("#youtube-popup").show();
                _this.player.playVideo();
            });

            $("#youtube-popup").find("img.close-youtube-popup").on('click',function() {
                _this.hideHomeVideo();
            });  
        }


        /**
         * Cache la popup vidéo de la HP
         */
        hideHomeVideo() {
            try {
                $("div.immersive-header video").show();
                $("#youtube-popup").hide();
                this.player.pauseVideo();
            } catch(e) {
                console.error(e);
            }
        }


        /**
         * Initialize all the youtube popup launchers on the page
         */
        initYoutubePopup() {
            var youtubeLauncher = $('div.youtube-launcher');
            var _this = this;
            $.each(youtubeLauncher, function(key, value) {
                var videoId = $(this).attr('data-youtubeId');
                if (!videoId)
                    return true;

                $("#youtube-popup").append("<div id='player"+key+"'></div>");
                _this.player[key] = new YT.Player('player'+key, {
                    videoId: videoId
                });

                $(this).on('click', function() {
                    $("#youtube-popup").find('iframe').hide();
                    $("#youtube-popup").find('#player'+key).show();
                    $("#youtube-popup").show();
                    _this.player[key].playVideo();
                    _this.currentPlayer = key;
                });

                $("#youtube-popup").find("img.close-youtube-popup").on('click',function() {
                    _this.hideYoutubePopup();
                });    
            });
        }


        /**
         * Hide youtube popup
         */
        hideYoutubePopup() {
            $("#youtube-popup").hide();
            this.player[this.currentPlayer].stopVideo();
        }
	}


	Drupal.youtubeUtils = new YoutubeUtils();

})(jQuery, Drupal);
