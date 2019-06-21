var onYouTubeIframeAPIReady;

(function ($, Drupal) {

    $(document)
        .ready(function() {
            $(".carousel").each(function() {
                $(this)
                    .carousel({interval: false})
                    .swiperight(function() {
                        $(this).carousel('prev');
                    })
                    .swipeleft(function() {
                        $(this).carousel('next');
                    });
            });
            Drupal.isMobile = $("#isMobile").is(':visible');

            Drupal.searchUtils.initAutoComplete();
            Drupal.youtubeUtils.loadApi();
            Drupal.burgerMenu.init();
            Drupal.gridUtils.initArticles();
            Drupal.filtersUtils.init();
            Drupal.globalUtils.timeoutAlerts();
            initAmbassadorsList();
            initMasterPage();
            initSportzine();
            initUGC();
            initPopupIntersticielle();

            if (Drupal.isMobile) {
                $("#banner-search-bar").attr("placeholder", $("#mobilePlaceholder").html());
                updateWishSize();
                var originalBGColor = $("div.search-field").css("background-color");
            }
            
            $("#mobileSearchIcon").on('click', function() {
                toggleMobileSearch();
            });
            

            $(window).resize(function() {
                updateWishSize();
            });
        })
        .mouseup(function(e) {
            if (!$("#burger-menu").is(e.target) && Drupal.globalUtils.hideOnClickOutside("#floating-menu",e.target) && $("#floating-menu").is(':visible'))
                Drupal.burgerMenu.hide();
            if (Drupal.globalUtils.hideOnClickOutside("#youtube-popup",e.target)) {
                if ($("#youtube-popup").is(':visible'))
                    Drupal.youtubeUtils.hideYoutubePopup();
            }
            if ($("#popupIntersticielle").is(':visible') && Drupal.globalUtils.hideOnClickOutside("#popupIntersticielle", e.target)) {
                $("#popupIntersticielle").hide("blind");
                e.stopPropagation();
            }

        })
        .keyup(function(e) {
            if (e.keyCode === 27) {
                Drupal.burgerMenu.hide();
                Drupal.youtubeUtils.hideHomeVideo();
            }
        });


    /**
     * Initialisation des popups youtube
     */
    onYouTubeIframeAPIReady = function() {
        Drupal.youtubeUtils.initYoutubePopup();
    }


    function updateWishSize() {
        if (!Drupal.isMobile) return;
        var wishSelectWidth = ($(".search-field").outerWidth() - $("#search-icon").outerWidth() - $("#filter-icon").outerWidth());
        $("#banner-wish-select").css("width",  wishSelectWidth + "px");
    }
    
    function initAmbassadorsList(){
      jQuery('#ambassadors_list').load('ambassadors_list?plus='+drupalSettings.nbAmbassadorsToDisplay+'&isAmbassador='+drupalSettings.isAmbassador,function(){
        $(this).trigger('document_change');
    });

    $(document).on('document_change', function () {
        $('#loading_ambassadors_list').hide();
        $('#loading_ambassadors_filter').hide();
        $("#moreAmbassadorsButton").unbind('click');
        $("#moreAmbassadorsButton").on('click',function(){
          $("#moreAmbassadorsButton").hide();
          $('#loading_ambassadors_list').show();
          var plus = $('.ambassador').length+drupalSettings.nbAmbassadorsToDisplay;
          var name=$("#ambassadorName").val();
          var activity=$("#ambassadorTheme").selected().val();
          var postalcode=$("#ambassadorPostalCode").val();
          var type=$("#ambassadorType").val();
          jQuery('#ambassadors_list').load(encodeURI('ambassadors_list?plus='+plus+"&name="+name+"&postalcode="+postalcode+"&theme="+activity+"&type="+type+'&isAmbassador='+drupalSettings.isAmbassador),function(){
              $(this).trigger('document_change');
          });
        });
        $("#submitAmbassadors").unbind('click');
        $("#submitAmbassadors").on('click',function(event){
          $('#loading_ambassadors_filter').show();
          var name=$("#ambassadorName").val();
          var activity=$("#ambassadorTheme").selected().val();
          var postalcode=$("#ambassadorPostalCode").val();
          var type=$("#ambassadorType").val();
          jQuery('#ambassadors_list').load(encodeURI('ambassadors_list?name='+name+"&postalcode="+postalcode+"&theme="+activity+"&type="+type+'&isAmbassador='+drupalSettings.isAmbassador),function(){
            $(this).trigger('document_change');
          });
        });
        $("#reinitAmbassadors").unbind('click');
        $("#reinitAmbassadors").on('click',function(event){
          $('#loading_ambassadors_filter').show();
          $("#ambassadorName").val("");
          $("#ambassadorTheme").selected().val("");
          $("#ambassadorPostalCode").val("");
          $("#ambassadorType").val("");
          jQuery('#ambassadors_list').load(encodeURI('ambassadors_list?isAmbassador='+drupalSettings.isAmbassador),function(){
            $(this).trigger('document_change');
          });
        });
    });
    }


    /**
     * Init master page
     */
    function initMasterPage() {
        if(drupalSettings.tid != undefined && !Drupal.isMobile){
            jQuery('#master-desktop').load('showmore?tid='+drupalSettings.tid+'&plus='+drupalSettings.nbArticlesToDisplay+'&'+drupalSettings.getParameters,function(){
                $(this).trigger('document_change');
            });

            $(document).on('document_change', function () {
                Drupal.gridUtils.updateArticlesEvent();
                $('#loading_master').hide();
                $("#showmorebutton").on('click',function(){
                    $("#showmorebutton").hide();
                    $('#loading_master').show();
                    var plus = ($('.desktopMasterpage .editorialContent').length/2)+drupalSettings.nbArticlesToDisplay;
                    jQuery('#master-desktop').load('showmore?tid='+drupalSettings.tid+'&plus='+plus+'&'+drupalSettings.getParameters,function(){
                        $(this).trigger('document_change');
                    });
                });
            });

            // Init click events on portraits section (top of the page)
            $("section#top div.ambassadeur, #carouselPortraits .mobile-ambassadeur").on('click', function() {
                window.location = $(this).attr('data-href');
            });
        }
        else if (drupalSettings.tid != undefined && Drupal.isMobile) {
            $("#toggleMap, #toggleList").on('click', function() {
                $('html, body').animate({
                    scrollTop: $("#block-filtersblock").offset().top + $("#block-filtersblock").height() - 50
                }, 500);
                $("#master_page_block_content, #block-interactivemapblock").toggle("blind");
                $("#toggleMap, #toggleList").toggle("blind");
            });


            jQuery('#master-mobile').load('showmore?tid='+drupalSettings.tid+'&plus=4&isMobile=true&'+drupalSettings.getParameters, function() {
                $(this).trigger('mobile_change');
            });

            $(document).on('mobile_change', function() {
                Drupal.gridUtils.updateArticlesEvent();
                $("#loading_master_mobile").hide();
                $("#showmorebutton").on('click',function(){
                    $("#showmorebutton").hide();
                    $('#loading_master_mobile').show();
                    var plus = ($('.mobileMasterpage .editorialContent').length)+4;
                    jQuery('#master-mobile').load('showmore?tid='+drupalSettings.tid+'&plus='+plus+'&isMobile=true&'+drupalSettings.getParameters,function(){
                        $(this).trigger('mobile_change');
                    });
                });
            });
        }
    }


    /**
     * Init webzine / portraits / hotspots pages
     */
    function initSportzine() {
        if (!$("#block-webzineportraitshotspotsblock").is(':visible') || drupalSettings.filtersTitle == "")
            return;
        jQuery('#sportzine_block_content').load('masterpage/showmore?name='+drupalSettings.filtersTitle+'&plus='+drupalSettings.nbArticlesToDisplay+'&'+drupalSettings.getParameters,function(){
            $(this).trigger('document_change');
        });
        $(document).on('document_change', function () {
            Drupal.gridUtils.updateArticlesEvent();
            $("div.interactive-map").get(0).interactiveMap.markers.init();
            $('#loading_sportzine').hide();
            $("#showmorebutton").on('click',function(){
                $("#showmorebutton").hide();
                $('#loading_sportzine').show();
                var plus = ($('.editorialContent').length/2)+drupalSettings.nbArticlesToDisplay;
                jQuery('#sportzine_block_content').load('masterpage/showmore?name='+drupalSettings.filtersTitle+'&plus='+plus+'&'+drupalSettings.getParameters,function(){
                    $(this).trigger('document_change');
                });
            })
        });
    }


    /**
     * Init UGC
     */
    function initUGC() {            
         $(".ugc").find('article').on('click', function() {
            var location = $(this).attr('data-href');
            var modal = $("#ugcModal");
            var bgimage = $(this).find('div.bg').css('background-image');
            var ugcSrc = $(this).attr('data-ugc-src');
            var ugcSummary = $(this).attr('data-ugc-summary');
            var videoId = $(this).attr('data-id-video');

            modal.on('hidden.bs.modal', function () {
                modal.find('#playerIframe').attr('src', "").hide();
            });

            // Image du post
            if (bgimage !== 'none') {
                var pictureUrl = Drupal.globalUtils.getUrlFromBgImage(bgimage);
                if (videoId){
                    modal.find('#postPicture').hide();
                    modal.find('#playerIframe').attr('src', "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1").show();
                 } else {
                    modal.find('#playerIframe').hide();
                    modal.find('#postPicture').attr('src', pictureUrl).show();
                 }
            }
            else {
                modal.find('#playerIframe').hide();
                modal.find('#postPicture').hide();
            }

            // Image du réseau
            var socialNetwork = $(this).find('.ugc-picto').attr('src');
            modal.find('#socialNetworkLogo').attr('src', socialNetwork);

            // UGC Source
            modal.find('#ugc_src').html(ugcSrc);

            // UGC Summary
            modal.find('#ugc_summary').html(ugcSummary);

            // Lien
            $("#seePost").attr('data-target', $(this).attr('data-href'));

            modal.modal('show');
        });
        $("#seePost").on('click', function() {
            var link = $(this).attr('data-target');
            if (link) {
                window.open($(this).attr('data-target'), '_blank');
                $("#ugcModal").modal('hide');
            }
        });
    }


    /**
     * Initialise les actions pour la popup intersticielle
     */
    function initPopupIntersticielle() {
        var popup = $("#popupIntersticielle");

        // Clic sur ignorer
        popup.find("#ignorePopupIntersticielle").on('click', function() {
            popup.hide("blind");
        });

        // Clic sur plus tard
        popup.find("#laterBtn").on('click', function() {
            popup.hide("blind"); 
        });
    }


    /**
     * Affiche ou masque la barre de recherche pour mobile / MD breakpoint
     */
    function toggleMobileSearch() {
        var searchField = $("div.search-field");

        if (searchField.css('position') === "absolute") {
            if (!searchField.hasClass("d-none"))
                searchField.addClass("doNotHideAfter");
            searchField.removeClass("d-none").addClass("d-block tempShow");
            
            searchField.find("#filter-icon").hide();

            searchField
                .css("position", "fixed")
                .css("background-color", "rgba(255, 255, 255, 1)")
                .css("border-color", "#01b2e6");
        }
        else {
            if (searchField.hasClass("tempShow"))
                searchField.removeClass("d-block tempShow").addClass("d-none");
            if (searchField.hasClass("doNotHideAfter"))
                searchField.removeClass("d-none");

            searchField
                .css("position", "absolute")
                .css("background-color", originalBGColor)
                .css("border-color", "white");

            searchField.find("#filter-icon").show();
        }
    }

})(jQuery, Drupal);

