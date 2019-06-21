(function($, Drupal) {

	/**
	 * Utilitaires globaux pour le front end
	 */
	class GlobalUtils {

		/**
		 * Constructeur
		 */
		constructor() {
			// console.log("== GlobalUtils initialized ==");
			this._possibleChars = 'abcdefghijklmnopqrstuvwxyz';
            this._possibleChars += this._possibleChars.toUpperCase();
            this._possibleChars += '0123456789';
		}


		/**
		 * Cherche un paramètre GET dans l'URL
		 */
	 	getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        }


        /**
         * Renvoie l'ancêtre ciblé d'un élément
         */
        getAncestor(el, selector) {
            var current = $(el);
            while(current = current.parent()) {
                 if(current.is(selector)) {
                    return current;
                 }
            }
            return null;
        }


        /**
         * Change l'image d'arrière plan d'un élément
         */
        changeBackgroundImage(elem, bgImage) {
            elem.css('background-image', bgImage);
        }


        /**
         * Click outside selector
         */
        hideOnClickOutside(selector, mouseTarget) {
            var container = $(selector);
            return (!container.is(mouseTarget) && container.has(mouseTarget).length === 0); 
        }


        /**
         * Récupère l'url d'une image à partir de sa source
         */
        getUrlFromBgImage(bgimage) {
            return bgimage.slice(4, -1).replace(/"/g, "");
        }


        /**
         * Fabrique une clé pour le random
         */
        makeRandomSeed(size) {
            var s = ''
            for(var i=0; i<size; i++) {
                s += this._possibleChars.charAt(Math.floor(Math.random() * this._possibleChars.length));
            }
            return s;
        }


        /**
         * Cache les alerts (messages drupal) au bout de 3 secondes
         */
        timeoutAlerts() {
            setTimeout(function() { $("div.alert-success").hide("blind"); }, 3000);
        }
	}


	Drupal.globalUtils = new GlobalUtils();

})(jQuery, Drupal);

if(typeof window.getAbsoluteUrl === 'undefined') {
  var baseUrl = drupalSettings.path.baseUrl;
  var a = document.createElement('a');
  window.getAbsoluteUrl = function(url) {
      a.href = (baseUrl + url).replace(/[\/]+/g, '/');
      return a.href;
  };
}