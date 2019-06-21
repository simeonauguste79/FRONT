(function($, Drupal) {

  /**
   * Utilitaires pour manipuler les grilles du site
   */ 
  class GridUtils {

    /**
     * Constructeur
     */
    constructor() {
      // console.log("== GridUtils initialized ==");
    }

    
    /**
     * Init grids of articles
     */
        initArticles() {
            this.updateArticlesEvent();
        }


        /**
         * Update events on articles
         */
        updateArticlesEvent() {
            $("div.f360-grid").find('.webmagCard').unbind('click');
            $("div.f360-grid").find('.webmagCard')
                .on('click', function(event) {
                    var target = $(this).find('article:not(.desc)');
                    var link = target.attr('data-href');
                    var nid = target.attr('data-nid');
                    var portrait = getAbsoluteUrl('')+target.attr('data-portrait');
                    var twitterShareData = Drupal.gridUtils.getTwitterShareLink(target.attr('data-alias'),target.find('.title').text());
                    var facebookShareData = Drupal.gridUtils.getFacebookShareLink(target.attr('data-alias'));

                    // Click sur bouton like
                    if ($(event.target).parent().attr('class') === "social") {
                        if ($(event.target).attr('class') === "like-picto"  || $(event.target).attr('class') === "liked-picto") {
                            var isRightSide = (event.pageX  > 3*($(document).width() / 4));
                            tripPlannerPopup.togglePopup($(event.target), nid, null, isRightSide);
                        }
                        if($(event.target).attr('class') === "logo-ambassadeur"){
                          window.location = portrait;
                        }
                        if($(event.target).attr('class') === "twitter"){
                          window.open(twitterShareData,'','menubar=no, scrollbars=no, width=600, height=600');
                        }
                        if($(event.target).attr('class') === "facebook"){
                            window.open(facebookShareData,'','menubar=no, scrollbars=no, width=600, height=600');
                        }

                        event.preventDefault();
                    }
                })
                .on('mouseenter', function() {
                    $(this).find('div.social').css('display','block');
                })
                .on('mouseleave', function() {
                    $(this).find('div.social').css('display','none');   
                });

            // Mobile
            $("div.f360-carousel").find('img.logo-ambassadeur')
                .unbind('click')
                .on('click', function() {
                    var article = $(this).parents().eq(1);
                    window.location = article.attr('data-portrait');
                });

            $("div.f360-carousel").find('img.facebook')
                .unbind('click')
                .on('click', function(e) {
                    var article = $(this).parents().eq(1);
                    var facebookShareData = Drupal.gridUtils.getFacebookShareLink(article.attr('data-alias'));
                    window.open(facebookShareData,'','menubar=no, scrollbars=no, width=600, height=600');
                    e.preventDefault();
                    return false;
                });

            $("div.f360-carousel").find('img.twitter')
                .unbind('click')
                .on('click', function(e) {
                    var article = $(this).parents().eq(1);
                    var twitterShareData = Drupal.gridUtils.getTwitterShareLink(article.attr('data-alias'),article.find('.title').text());
                    window.open(twitterShareData,'','menubar=no, scrollbars=no, width=600, height=600');
                    e.preventDefault();
                    return false;
                });
            
            $("div.f360-carousel").find('img.like-picto').unbind('click');

            this.initSocialPictos();
        }


        /**
         * Effets hover pictos sociaux
         */
        initSocialPictos() {
            var socialPictos = [
                'facebook',
                'twitter',
                'logo-ambassadeur',
                'like-picto',
                'liked-picto',
                'footer-facebook',
                'footer-twitter',
                'footer-youtube',
                'footer-instagram',
                'footer-rss',
            ];
            var spotsToLook = $("div.region-footer-second, article .social, div.tsftTitleBanner .social,div.infos .social");
            _.each(socialPictos, function(key) {
                spotsToLook.find("img."+key)
                    // On mouse enter, we retrieve the hover picture and build the path dynamically
                    .on('mouseenter', function() {
                        var src = $(this).attr('src');
                        if(!src.includes('-hover')) {
                            var newsrc = src.replace(/\.([^.]+)$/, '-hover.$1');
                            $(this).attr('src', newsrc);
                        }
                    })
                    // On mouse leave, we reset the normal image
                    .on('mouseleave', function() {
                        if (!$(this).hasClass("liked-picto")) {
                            var newsrc = $(this).attr('src').replace('-hover','');
                            $(this).attr('src',newsrc);
                        }
                    });
            });
        }
        
        /*
        *
        */
        getTwitterShareLink(twitterData,title){
          var via = 'toutcommence29';
          var hashtags = 'Finistere';
          var twitterUrl = "https://twitter.com/intent/tweet?via=" + via + "&=text=" + title + "&hashtags=" + hashtags + "&url=" + twitterData;
          
          return twitterUrl;
        }
        
       getFacebookShareLink(facebookData){
         return "https://www.facebook.com/sharer/sharer.php?u=" + facebookData;
       }
  }

  Drupal.gridUtils = new GridUtils();

})(jQuery, Drupal);