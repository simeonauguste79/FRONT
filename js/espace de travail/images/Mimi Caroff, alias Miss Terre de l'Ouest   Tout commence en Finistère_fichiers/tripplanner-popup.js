var tripPlannerPopup;

(function($, Drupal, drupalSettings) {

	var TripPlannerPopup = function(el) {
		var _this = this;
		var _picto, _pictoOffsetLeft, _article, _isRightSide;

		/**
		 * Callback d'animation pour replacer la popup
		 */
		this.resizeCallback = function() {
			if (!Drupal.isMobile)
				$(el).trigger('resize');
		};


		/**
		 * Callback appelé au clic sur l'icone "like"
		 */
		this.togglePopup = function(picto, nid, container, isRightSide) {
			var popup = $(el);
			_picto = picto;
			_pictoOffsetLeft = _picto.offset().left;
            _article = (container ? container : picto.parent().parent());
            _isRightSide = isRightSide;

            // Ajout du nid (node à ajouter à un projet) en data de la popup
            var sameArticle = popup.attr('data-nid') == nid;
            popup.attr('data-nid', nid);

            // Popup déjà visible
            if (!Drupal.isMobile) {
            	var pos = _this.computePopupPosition();  
				var triangle = $(el).find('#tripplanner-popup-triangle');
	           	var newTriangleX = _this.computeTriangleX(pos.left);
	           	var triangleX = triangle.css('left');
	            if (popup.is(':visible')) {

	                // Popup déjà visible pour l'article courant
	                if (sameArticle) {
	                    _this.hide();
	                }
	                // Popup visible sur un autre article
	                else {
	                    // Du coup on la bouge
	                    _this.show(true);
	                }
	            }
	            else {
	                _this.show(false);
	            }

	            // document.styleSheets[0].addRule('#tripplanner-popup::after','left: 300px');
            	triangle.css('left', newTriangleX);
	        }
	        else {
	        	_this.show(false);
	        }
		};


		/**
		 * Calcule la position de la popup sur la page
		 */
		this.computePopupPosition = function() {
			// Position de la popup
            var top = _article.offset().top - $(el).height() - 17;
            var left = _article.offset().left;

            // Si la popup s'est ouverte du côté droit de l'écran
            // Et que l'on est en mode "inscription / connexion"
            if (_isRightSide) {
            	var rightOffset = $("#main").offset().left + $("#main").outerWidth();
            	left = rightOffset - $(el).width();
            } 

            return {left: Math.round(left), top: Math.round(top)};
		}


		/**
		 * Calcule la position du triangle sur la page
		 */ 
		this.computeTriangleX = function(popupLeft) {
            return _pictoOffsetLeft - popupLeft;
		}


		/**
		 * Masque la popup et la rebascule sur l'affiche normal
		 */
		this.hide = function() {
			$(el).find('.main-content').show();
			$(el).find('.createProjectForm').hide();
			$(el).hide('blind');
		};


		/**
		 * Affiche la popup et charge les projets en ajax
		 */
		this.show = function(move) {
			var loader = $(el).find("#ajaxLoaderProjects");
			var container = $(el).find("#projectsList");
			container.html("");
			loader.show();

			// Affichage de la popup
			if (!Drupal.isMobile) {
				var pos = _this.computePopupPosition();
				$(el).css('top', pos.top).css('left', pos.left);
				if (!move) {
					$(el).show('blind');
				}

				$('html, body').animate({
					scrollTop: $(el).offset().top - $(el).height() - 200
				}, 500);
			}
			else {
				$(el).show('blind');
			}

			// Si en mode loggin form, on ne va pas plus loin
			if (drupalSettings.userId == "")
				return;

			// Chargement des projets
			$.ajax({
				type: 'POST',
				url: drupalSettings.loadProjectsUrl,
				async: true,
				dataType: 'json',
				data: {
					'userId' : drupalSettings.userId,
					'nodeToAdd': $(el).attr('data-nid'),
				},
				success: function(data) {
					_this.fillProjectsList(data, loader, container);
				},
				error: function(data) {
					console.log('Erreur de requête ajax: ' + data.responseText);
					loader.hide(_this.resizeCallback);
				}
			})
		};


		/**
		 * Callback de success ajax pour récupérer les projets du user
		 */
		this.fillProjectsList = function(data, loader, container) {
			// Cas d'erreur
			if (data.hasOwnProperty('error')) {
				loader.hide(_this.resizeCallback);
				container.append(data.error);
				return;
			}

			// Pas encore de projets
			if (data.projets.length == 0) {
				loader.hide(_this.resizeCallback);
				container.append("Vous n'avez aucun dossier pour l'instant. Cliquez sur l'icône + pour en créer un !");
				return;
			}

			// Remplissage de la liste des projets
			loader.hide(_this.resizeCallback);
			container.html("");
			data.projets.forEach(function(projet) {
				container.append(
					'<div class="form-check">' +
						'<label>' +
							'<input type="checkbox" name="projet" ' + (projet.checked ? 'checked' : '') + ' value="' + projet.id + '">' +
							'<span class="label-text">' + projet.title + '</span>' +
						'</label>' +
					'</div>'
				);
			});
		}


		/**
		 * Bascule la vue de la popup en mode "créer un projet"
		 */
		this.switchToCreateProject = function() {
			$(el).find('#projectNameMsg').hide();
			$(el).find('#ajaxLoaderCreateProject').hide();
			$(el).find('.main-content').hide();
			$(el).find('.createProjectForm').show(_this.resizeCallback);
		};


		/**
		 * Annule la création d'un projet
		 */
		this.cancelProject = function() {
			$(el).find('.createProjectForm').hide();
			$(el).find('.main-content').show(_this.resizeCallback);
		};


		/**
		 * Création d'un nouveau projet
		 */
		this.createProject = function(btn) {
			var projectName = $(el).find('.projectName').val();
			var loader = $(el).find('#ajaxLoaderCreateProject');

			// Si une action est déjà en cours (bouton disabled) on ne fait rien
			if (btn.hasClass('disabled'))
				return;

			// Controle la présence d'un nom pour le projet
			if (projectName == "") {
				$(el).find('#projectNameMsg').show('blind');
				return;
			}
			else
				$(el).find('#projectNameMsg').hide('blind');

			// Lance la création
			btn.addClass('disabled');
			loader.show(_this.resizeCallback);
			$.ajax({
				type: 'POST',
				url: drupalSettings.createProjectUrl,
				async: true,
				dataType: 'json',
				data: {
					'userId': drupalSettings.userId,
					'projectName': projectName,
					'nodeToAdd': $(el).attr('data-nid'),
				},
				success: function(data) {
					_this.finalize(data, loader, btn, true);
				},
				error: function(data) {
					console.log('Erreur de requête ajax: ' + data.responseText);
				}
			});
		};


		/**
		 * Enregistrement des modifications (ajout / suppression de l'article du ou des projets)
		 */
		this.save = function() {
			var loader = $(el).find("#ajaxLoaderProjects");
			var btn = $(el).find('#addToProject');
			if (btn.hasClass('disabled'))
				return;

			// On récupère les ids des projets cochés
			var projectsChecked = [];
			$(el).find('input[name="projet"]:checked').each(function() {
				projectsChecked.push($(this).val());
			});
			projectsChecked = projectsChecked.join(',');

			// On met à jour 
			loader.show(_this.resizeCallback);
			btn.addClass('disabled');
			$.ajax({
				type: 'POST',
				url: drupalSettings.updateProjectsUrl,
				async: true,
				dataType: 'json',
				data: {
					'userId': drupalSettings.userId,
					'projectsChecked': projectsChecked,
					'article': $(el).attr('data-nid'),
				},
				success: function(data) {
					_this.finalize(data, loader, btn, false);
				},
				error: function(data) {
					console.log('Erreur de requête ajax: ' + data.responseText);
				}
			});
		};


		/**
		 * Fermeture de la popup après enregistrement 
		 * (création de projet ou ajout dans projets existants)
		 */
		this.finalize = function(data, loader, btn, projectJustCreated) {
			// Cas d'erreur
			if (data.hasOwnProperty('error')) {
				loader.hide(_this.resizeCallback);
				btn.removeClass('disabled');
				$.notify({
					message: data.error
				}, {
					type: 'danger',
					placement: {
						from: "bottom",
						align: "right"
					}
				});
				return;
			}

			// Compte les cases cochées pour switcher ou non le coeur
			var count = $(el).find('input[name="projet"]:checked').length;
			var src = _picto.attr('src');
			if (count > 0 || projectJustCreated) {
				if (!_picto.hasClass("liked-picto")) {
					_picto.removeClass('like-picto').addClass('liked-picto');
               		_picto.attr('src', src.replace(/\.([^.]+)$/, '-hover.$1'));
				}
			}
			else {
				_picto.addClass('like-picto').removeClass('liked-picto');
				_picto.attr('src', src.replace('-hover',''));
			}

			// Notify message de succès
			$.notify({
				message: data.success
			}, {
				type: 'success',
				placement: {
					from: "bottom",
					align: "right"
				}
			});
			btn.removeClass('disabled');
			_this.hide();
		};


		/**
		 * Initialisation des onglets (Inscription / connexion)
		 */
		this.initTabs = function() {
			$(el).find('#tabsLinks').find('a').on('click', function() {
				_this.switchTabsTo($(this).attr('data-toggle'), $(this).parent());
				return false;
			});

			$(el).find('#tabsLinks').find('li').on('click', function() {
				_this.switchTabsTo($(this).find('a').attr('data-toggle'), $(this));
			});
		};


		/**
		 * Switch d'un onglet à l'autre
		 */
		this.switchTabsTo = function(tabId, li) {
			li.addClass('active');
			$(el).find('#tabsLinks').find('li:not(#'+li.attr('id')+')').removeClass('active');
			$(el).find('#'+tabId).show().addClass('active');
			$(el).find('.tab:not(#'+tabId+')').hide().removeClass('active');
			$(el).trigger('resize');
		};


		/**
		 * Formulaire de connexion
		 */
		this.initConnexionForm = function() {
			$(el).find('div.rememberMe').on('click', function() {
				$('#rememberMe, #dontRememberMe').toggle();
			});
		};


		/**
		 * Formulaire d'inscription
		 */
		this.initRegisterForm = function() {
			$("#submitRegistration").on('click', function() {
				var form = $("#registerForm");
				var mail = form.find('#mail').val();
				var username = form.find('#username').val();
				var password = form.find('#password').val();
				var password2 = form.find('#password2').val();
				if (mail == "" || username == "" || password == "" || password2 == "") {
					alert("Veuillez renseigner tous les champs");
					return false;
				}
				else if (password !== password2) {
					alert("Les mots de passe ne correspondent pas");
					return false;
				}
				else if (!isEmail(mail)) {
					alert("L'adresse mail renseignée n'est pas au bon format.");
					return false;
				}

				$("#registerForm").submit();
			});
		}


		/**
		 * Initialisation de la popup
		 */ 
		this.init = function() {
			// Demande de création d'un nouveau projet
			$(el).find('#createProject').on('click', function() {
				_this.switchToCreateProject();
			});

			// Annulation de la création d'un nouveau projet
			$(el).find('#cancelProject').on('click', function() {
				_this.cancelProject();
			});

			// Soumission du formulaire de création d'un nouveau projet
			$(el).find('#createProjectBtn').on('click', function() {
				_this.createProject($(this));
			});

			// Fermeture de la popup au clic sur Annuler
			$(el).find('button.cancelPopup').on('click', function() {
				_this.hide();
			});

			// Enregistrement des modifications (ajout / suppression de l'article du ou des projets)
			$(el).find('#addToProject').on('click', function() {
				_this.save();
			});

			// Resize event
			$(el).resize(function() {
				var pos = _this.computePopupPosition();
				$(el).css('top', pos.top);
				$(el).css('left', pos.left);
				var newTriangleX = _this.computeTriangleX(pos.left);
				$(el).find('#tripplanner-popup-triangle').css('left', newTriangleX);
			});

			// Initialisation des onglets (Inscription / connexion)
			_this.initTabs();

			// Formulaire de connexion
			_this.initConnexionForm();

			// Formulaire d'inscription
			_this.initRegisterForm();
		};


		// Constructeur
		{
			_this.init();
		};
	};



	$(document)
		.ready(function() {
			waitForIsMobile();

			function waitForIsMobile() {
				if (Drupal.isMobile === "undefined") {
					setTimeout(waitForIsMobile, 1000);
					return;
				}

				tripPlannerPopup = new TripPlannerPopup('div#block-tripplannerpopup');

				$("div.carousel-item").find('img.like-picto, img.liked-picto').on('click', function() {
					tripPlannerPopup.togglePopup($(this), $(this).parent().attr("data-nid"));
					return false;
				});
			}
		})
		.mouseup(function(e) {
			if (Drupal.globalUtils.hideOnClickOutside('#tripplanner-popup', e.target) && !$('img.like-picto').is(e.target) && !$('img.liked-picto').is(e.target)) {
				if ($('#tripplanner-popup').is(':visible'))
					tripPlannerPopup.hide();
			}
		})
		.keyup(function(e) {
        	if (e.keyCode === 27) {
	        	if ($("#tripplanner-popup").is(':visible'))
	        		tripPlannerPopup.hide();
	        }
	    });
}(jQuery, Drupal, drupalSettings));


function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}