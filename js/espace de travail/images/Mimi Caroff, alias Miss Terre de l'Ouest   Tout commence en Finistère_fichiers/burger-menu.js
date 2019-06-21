(function($, Drupal) {

	/**
	 * Class pour gérer le burger menu
	 */
	class BurgerMenu {

		/**
		 * Constructeur
		 */
		constructor() {
			// console.log("== BurgerMenu initialized ==");
		}


		/**
		 * Menu burger
		 */
        init() {
            var photos = $("#floating-menu-container").find('#photos');
            var _this = this;

            $("header img#burger-menu").on('click',function() {
                _this.show();
            });

            $("#floating-menu-container").find('.menu-part ul li')
                .on('click',function() {
                    window.location = $(this).find('a').attr('href');
                    return false;
                })
                .on('mouseenter', function() {
                    var pictures = $(this).find('.itemPictures').find('.picture');
                    if (pictures.length > 0) {
                        Drupal.globalUtils.changeBackgroundImage(photos.find('#leftPicture'), 'url('+ $(pictures[0]).find('span').html() +')');
                        photos.find('#leftTitle').html($(pictures[0]).attr('data-title'));
                        photos.find('#leftCategories').html($(pictures[0]).attr('data-categories'));
                        photos.find('#leftSummary').html($(pictures[0]).attr('data-summary'));
                        $("#leftDiv").on('click',function(){
                          window.location=$(pictures[0]).attr('data-href');
                        });
                        if (pictures.length > 1){
                            Drupal.globalUtils.changeBackgroundImage(photos.find('#rightUpPicture'), 'url('+$(pictures[1]).find('span').html()+')');
                            photos.find('#rightUpTitle').html($(pictures[1]).attr('data-title'));
                            photos.find('#rightUpCategories').html($(pictures[1]).attr('data-categories'));
                            photos.find('#rightUpSummary').html($(pictures[1]).attr('data-shortsummary'));
                            $("#rightUpDiv").on('click',function(){
                              window.location=$(pictures[1]).attr('data-href');
                            });
                        }
                        if (pictures.length > 2){
                            Drupal.globalUtils.changeBackgroundImage(photos.find('#rightDownPicture'), 'url('+$(pictures[2]).find('span').html()+')');
                            photos.find('#rightDownTitle').html($(pictures[2]).attr('data-title'));
                            photos.find('#rightDownCategories').html($(pictures[2]).attr('data-categories'));
                            photos.find('#rightDownSummary').html($(pictures[2]).attr('data-shortsummary'));
                            $("#rightDownDiv").on('click',function(){
                              window.location=$(pictures[2]).attr('data-href');
                            });
                        }
                        photos.addClass('d-md-block');
                    }else{
                      $("#floating-menu-container").find("#photos").removeClass('d-md-block');
                      Drupal.globalUtils.changeBackgroundImage(photos.find('#leftPicture'), '');
                      Drupal.globalUtils.changeBackgroundImage(photos.find('#rightUpPicture'), '');
                      Drupal.globalUtils.changeBackgroundImage(photos.find('#rightDownPicture'), '');
                    }
                })
            if ($("header#header").hasClass("shrink")) {
                $("#floating-menu-container").addClass("shrink");
            }
        }


        /**
         * Show Burger Menu
         */
        show() {
            $("header img.burger-menu-btn").toggle();
            $("#floating-menu").show("blind");
        }

        
        /**
         * Hide burger menu
         */
        hide() {
            if ($("#burger-menu").is(':visible')) return;
            $("header img.burger-menu-btn").toggle();
            $("#floating-menu").hide("blind");
        }
	}


	Drupal.burgerMenu = new BurgerMenu();

})(jQuery, Drupal);