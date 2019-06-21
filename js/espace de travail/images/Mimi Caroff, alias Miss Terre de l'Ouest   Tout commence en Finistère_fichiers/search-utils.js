(function($, Drupal) {

	/**
	 * Utilitaires pour la recherche et l'autocomplete
	 */
	class SearchUtils {

		/**
		 * Constructeur
		 */
		constructor() {
			// console.log("== SearchUtils initialized ==");
		}


		/**
		 * Initialisation de l'auto complete
		 */
        initAutoComplete() {
            if ($("#banner-search-bar").length) {
                this.initAutoCompleteOn($('#banner-search-bar'));
            }
            this.initAutoCompleteOn($('#header-search-bar'));
        }


        // Initialisation de l'auto complete pour un input précis
        initAutoCompleteOn(input) {
            var container = input.parent().parent();
            var form = Drupal.globalUtils.getAncestor(input, 'form');

            form.submit(function() {
                form.isSubmitting = true;
                return true;
            });

            input.autocomplete({
                minLength:4,
                source : function(request, response) {
                    $.ajax({
                        type:'GET',
                        data:{'q':input.val()},
                        processData:true,
                        url: drupalSettings.searchUrl,
                        cache:false,
                        dataType:'json',
                        success: response
                    });
                },
                select : function(event, ui) {
                    if(ui.item.url) {
                        window.location = ui.item.url;
                    }
                    return false;
                },
                open: function(event, ui) {
                    $("li.ui-menu-item").parent()
                        .css("width", container.outerWidth())
                        .css("left", container.offset().left);
                },
                response: function(event, ui) {
                    if(!form.isSubmitting) {
                        var results = ui.content;
                        $.each(results, function() {
                            $(this)[0]['label'] = ($(this)[0]['label'] === null || $(this)[0]['excerpt'] === null) ? $(this)[0]['value'] : $(this)[0]['excerpt'].slice(1,-1);
                        });
                    }
                }
            })
            .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
                return $( "<li></li>" )
                    .data( "item.autocomplete", item )
                    .append( "<div tabindex='-1' class='ui-menu-item-wrapper'>"+ item.label + "</div>" ) 
                    .appendTo( ul );
            };
        }


        // Search Banner
        initSearchBanner(){
            $(".banner-wish").show();
            $(".banner-who").show();
            $("#andor").show();
            this.activateSearch();    
        }

        
        /**
         * Activate the search bar and disable the filter bar
         */
        activateSearch(){
        	var _this = this;
            var bannerWho = document.getElementsByClassName("banner-who");
            var bannerWish = document.getElementsByClassName("banner-wish");
            var filterOn = false;

            document.getElementById("filter-icon").style.background = 'white';

            var searchIconSrc=$("#search-icon-img").attr('src');
            searchIconSrc=searchIconSrc.replace('icone_recherche_desactive.png','icone_recherche_active_fond.png');
            $("#search-icon-img").attr('src',searchIconSrc);

            var filterIconSrc=$("#filter-icon-img").attr('src');
            filterIconSrc=filterIconSrc.replace('icone_explorer_active_fond.png','icone_explorer_desactive.png');
            $("#filter-icon-img").attr('src',filterIconSrc);

            $('#search-icon').on('click',function(){
               	if(!filterOn){
                    $( "#banner-who-select" ).prop("disabled",true);
                    $( "#banner-wish-select" ).prop("disabled",true);
                    document.getElementById('banner-search-form').submit();
                }
            });

            $('#filter-icon').on('click', function(e){
                e.preventDefault();
                filterOn = _this.activateFilter();
            })
            document.getElementById("search-icon").style.backgroundColor = '#01b2e6';
            document.getElementById("search-button").style.visibility = 'hidden';
            document.getElementById("banner-search-bar").style.visibility = 'visible';

            for (var i = 0; i < bannerWho.length; i++) {
                bannerWho[i].style.visibility = "hidden";
            }

            for (var i = 0; i < bannerWish.length; i++) {
                bannerWish[i].style.visibility = "hidden";
            }
             
             document.getElementById("andor").style.visibility = 'hidden';
        }


        /**
         * Activate the filter bar and disable the search bar
         */
        activateFilter(){
        	var _this = this;
        	var bannerWho = document.getElementsByClassName("banner-who");
        	var bannerWish = document.getElementsByClassName("banner-wish");

        	document.getElementById("search-icon").style.background = 'white';

        	var searchIconSrc=$("#search-icon-img").attr('src');
        	searchIconSrc=searchIconSrc.replace('icone_recherche_active_fond.png','icone_recherche_desactive.png');
        	$("#search-icon-img").attr('src',searchIconSrc);

        	var filterIconSrc=$("#filter-icon-img").attr('src');
        	filterIconSrc=filterIconSrc.replace('icone_explorer_desactive.png','icone_explorer_active_fond.png');
        	$("#filter-icon-img").attr('src',filterIconSrc);


        	$('#search-icon').on('click',function(e){
        		e.preventDefault();
        		_this.activateSearch();
        	});
        	$('#filter-icon').on('click',function(e){
        		e.preventDefault();
        	});

        	$('#search-button').on('click',function(){
        		$( "#banner-search-bar" ).prop("disabled",true);
        		selectedWishVal = $('#banner-wish-select').find("option:selected").val();
        		selectedWhoVal = $('#banner-who-select').find("option:selected").val();
        		if(selectedWhoVal === '-1'){
        			$( "#banner-who-select" ).prop("disabled",true);
        		}
        		if(selectedWishVal === '-1'){
        			$( "#banner-wish-select" ).prop("disabled",true);
        		}
        		document.getElementById('banner-search-form').submit();
        	});

        	document.getElementById("filter-icon").style.backgroundColor = '#01b2e6';
        	document.getElementById("search-button").style.visibility = 'visible';
        	document.getElementById("banner-search-bar").style.visibility = 'hidden';

        	for (var i = 0; i < bannerWho.length; i++) {
        		bannerWho[i].style.visibility = "visible";
        	}

        	for (var i = 0; i < bannerWish.length; i++) {
        		bannerWish[i].style.visibility = "visible";
        	}

        	document.getElementById("andor").style.visibility = 'visible';

        	return true;
        }
	}


	Drupal.searchUtils = new SearchUtils();

})(jQuery, Drupal);