(function($, Drupal, drupalSettings) {

	var RelatedContentsController = function(el) {
		var _this = this;

		this.init = function() {
			//handler pour 'see more'
			$('#seemore').on('click', function(){
				_this.onSeemoreClicked();
			});
		}

		this.insertArticles = function(html) {
			$('.relatedcontents-row').append(html);
			Drupal.gridUtils.updateArticlesEvent();
		}

		this.onSeemoreClicked = function() {
			// Pour le mobile, on ne fait pas de chargement ajax et cette div est absente
			if (!$('.relatedcontents-row').is(':visible'))
				return;

			var offset = $('.related_content_item').length;

			$("#loadingGif").show();
			$("#seemoreMsg").hide();

			var url = (drupalSettings.path.baseUrl + '/search/related').replace(/[\/]+/g, '/');

			var data = {
				nodeId: drupalSettings.nodeId,
				offset: offset,
				limit: drupalSettings.nbResults,
			};

			var hasRightColumn = $('.rightColumn').length > 0;

			if( ! hasRightColumn) {
				data['colMd'] = 4;
				data['colLg'] = 3;
			} else {
				data['colMd'] = 6;
				data['colLg'] = 4;
			}

			$.ajax({
				type: 'GET',
				dataType:'html',
				async: true,
				url: url,
				data: data,
				error: function() {
					console.log("Erreur de requête ajax");
				},
				success: function(html) {
					_this.insertArticles(html);
				}
			}).always(function() {
				$("#loadingGif").hide();
				$("#seemoreMsg").show();
			});

		};

		//Constructeur
		{
			_this.el = el;
			_this.init();
			//déclencher une requete des l'ouverture de la page
			_this.onSeemoreClicked();
		}
	};

	/**
	 * Document ready
	 */
	$(document).ready(function() {
		$('.block-relatedcontents-block').each(function(id, el) {
			el.controller = new RelatedContentsController(el);
		});
	});

}(jQuery, Drupal, drupalSettings));