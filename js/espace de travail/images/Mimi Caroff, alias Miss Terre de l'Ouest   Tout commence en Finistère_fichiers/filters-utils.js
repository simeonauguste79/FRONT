(function($, Drupal) {

	/**
	 * Utilitaires pour le bloc des filtres
	 */
	class FiltersUtils {

		/**
		 * Constructeur
		 */
		constructor() {
			// console.log("== FiltersUtils initialized ==");
		}


		/**
		 * Init filters
		 */
        init() {
        	var _this = this;
            var filters = $("#filters").find('div.filter');

            $("#filters").find('#search').html(drupalSettings.filtersTitle);

            // Avoid dropdown to close on click inside
            $("#filters").find('.dropdown-menu').on('click', function(event) {
                event.stopPropagation();
            });

            // Reset checkboxes
            filters.find("button[type='reset']").on('click',function() {
                // console.log('test');
                $(this).parent().find('input[type="checkbox"]').attr('checked',false);
                // $(this).parent().parent().find('button.filterBtn').dropdown('toggle');
            });
            
            var now = new Date();

            // Create datetimepicker for arrival and departure date
            $('#arrival-date-input').datetimepicker({
        		format : 'DD-MM-YYYY',
        		locale : 'fr',
        		minDate: new Date(now.getFullYear(),now.getMonth(),now.getDate()),
    	    });
                
    	    $('#departure-date-input').datetimepicker({
        		format : 'DD-MM-YYYY',
        		locale : 'fr',
    	    });

            if ($("#arrival-date-input").find('input').val()) {
                $('#departure-date-input').datetimepicker('minDate', $("#arrival-date-input").find('input').val());                
            }
	    
    	    // Departure date don't be less than arrival date
    	    $("#arrival-date-input").on("change.datetimepicker", function(e) {
//                console.log('?');
    		    $('#departure-date-input').datetimepicker('minDate', e.date);
    	    });

            $("#arrival-date-input, #departure-date-input")
                .on("datetimepicker.hide", function(e) {
                    $("#filters").find("button[type='submit']").click();
                });
            
            $("#arrival-date-input, #departure-date-input").bind("DOMNodeInserted", function(event) {
                if (event.target == undefined)
                    return;

                var targetClass = $(event.target).attr('class');
                if (targetClass == undefined)
                    return;

                if (targetClass.indexOf("bootstrap-datetimepicker-widget") >= 0) {
                    $(document).mouseup(function(e) {
                        if (Drupal.globalUtils.hideOnClickOutside("div.bootstrap-datetimepicker-widget", e.target)) {
                            $("#arrival-date-input").datetimepicker('hide');
                            $("#departure-date-input").datetimepicker('hide');
                        }
                    });
                }
            });
                     
            // Change filters color when values selected and submit when the dropdown is hide.
            filters.on('hide.bs.dropdown', function() {
                _this.majBtn($(this));
                $("#filters").find("button[type='submit']").click();
            });

            $.each(filters,function() {
                _this.majBtn($(this));
            });
        }


        /**
         * Met à jour les boutons de filtre
         */
        majBtn(filter) {
            var checkboxesChecked = filter.find('input[type="checkbox"]:checked');
            if (checkboxesChecked.length > 0)
                filter.find('button.filterBtn').removeClass('btn-light').addClass('btn-default');
            else
                filter.find('button.filterBtn').removeClass('btn-default').addClass('btn-light');
        }
	}


	Drupal.filtersUtils = new FiltersUtils();

})(jQuery, Drupal);