(function($, Drupal) {
  $(document)
      .ready(
          function() {
            // Init click events on portraits section (top of the page)
            // $(
            //     "section#top div.ambassadeur, #carouselPortraits .mobile-ambassadeur")
            //     .on('click', function() {
            //       window.location = $(this).attr('data-href');
            //     });
            var article = $("#detailArticle, #pagePro");

            // Affichage de la popup tripplanner
            article.find("div.social").find('img.like-picto, img.liked-picto').on(
                'click',
                function(event) {
                  var socialDiv = $(this).parent();
                  var nid = socialDiv.attr('data-nid');
                  var isRightSide = (event.pageX > ($(document).width() / 2));
                  tripPlannerPopup.togglePopup($(this), nid, socialDiv,
                      isRightSide);
                });

            // Display popup for social network sharing
            var title = $('.field--name-title').html();
            if(title === undefined){
              title = article.find('#title').html();
            }
            var twitterShareData = Drupal.gridUtils.getTwitterShareLink(
                window.location.href, title);
            var facebookShareData = Drupal.gridUtils
                .getFacebookShareLink(window.location.href);

            article.find("div.social").find('.twitter').on(
                'click',
                function() {
                  window.open(twitterShareData, '',
                      'menubar=no, scrollbars=no, width=600, height=600');
                });
            article.find("div.social").find('.facebook').on(
                'click',
                function(event) {
                  window.open(facebookShareData, '',
                      'menubar=no, scrollbars=no, width=600, height=600');
                });

            if ($("#carouselPortraits").is(':visible')) {
              $("#carouselPortraits").carousel({
                interval : false
              }).swiperight(function() {
                $(this).carousel('prev');
              }).swipeleft(function() {
                $(this).carousel('next');
              });
            }
          });

})(jQuery, Drupal);