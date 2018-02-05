$(document).ready(function(){

	$("#portfolio-contant-active").mixItUp();


	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

		// Navigation Scroll
		(function($){
		    $.fn.scrollingTo = function( opts ) {
		        var defaults = {
		            animationTime : 1000,
		            easing : '',
		            callbackBeforeTransition : function(){},
		            callbackAfterTransition : function(){}
		        };

		        var config = $.extend( {}, defaults, opts );

		        $(this).click(function(e){
		            var eventVal = e;
		            e.preventDefault();

		            var $section = $(document).find( $(this).data('section') );
		            if ( $section.length < 1 ) {
		                return false;
		            };

		            if ( $('html, body').is(':animated') ) {
		                $('html, body').stop( true, true );
		            };

		            var scrollPos = $section.offset().top;

		            if ( $(window).scrollTop() == scrollPos ) {
		                return false;
		            };

		            config.callbackBeforeTransition(eventVal, $section);

		            $('html, body').animate({
		                'scrollTop' : (scrollPos+'px' )
		            }, config.animationTime, config.easing, function(){
		                config.callbackAfterTransition(eventVal, $section);
		            });
		        });
		    };
		}(jQuery));


	$('.main-menu ul li a,.smooth-scroll').scrollingTo();

	$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, body').animate({scrollTop: 0}, 300);
			})

			/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
    	event.preventDefault();
    	var content = $('.modal-body');
    	content.empty();
      	var title = $(this).attr("title");
      	$('.modal-title').html(title);      	
      	content.html($(this).html());
      	$(".modal-profile").modal({show:true});
    });

    $('.container-fluid .navbar a').click(function(){ 

    	var $target = $($(this).data('target')); 

    	if(!$target.hasClass('in'))

        	$('.container-fluid .in').removeClass('in').height(0);

	});



});





