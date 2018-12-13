/* Author: Peter Schmolze */
$(document).ready(function() {
    var siteController = {
        init: function() {
            siteController.toggleMobileNav();
            siteController.scrollToSection();
            siteController.moveBGPhoto();
            siteController.aos();
            siteController.logoFixed();
            siteController.centerNav();
        },

        toggleMobileNav: function () {
            // Toggle mobile nav
            $('.hamburger').on('click', function() {
                $(this).toggleClass('is-active');
                $('.main-nav').toggleClass('is-open');
            });
        },

        scrollToSection: function () {
            /* Smooth scroll to anchor href and bring in back to top button */
            var $mainNavLinks = $('.main-nav a');

            $mainNavLinks.on("click", function(e) {
                e.preventDefault();
                // $mainNavLinks.removeClass('is-active')
                //             .closest('.main-nav')
                //             .removeClass('is-open');
                $('.hamburger').toggleClass('is-active');
                // $(this).addClass('is-active');

                scrollTo( $(this) );
            });

            $('.intro .btn, .logo').on('click', function() {
                scrollTo( $(this) );
            });
        },

        moveBGPhoto: function () {
            var movementStrength = 50,
                height = movementStrength / $(window).height(),
                width = movementStrength / $(window).width(),
                $photo = $('.intro');
                
            if( $('html').hasClass('no-touch') ) {
                $photo.mousemove(function(e){
                    var pageX = e.pageX - ($(window).width() / 2),
                        pageY = e.pageY - ($(window).height() / 2),
                        newvalueX = width * pageX * -1 - 25,
                        newvalueY = height * pageY * -1 - 50;
                    $photo.css("background-position", newvalueX+"px     "+newvalueY+"px");
                });
            }
        },

        logoFixed: function () {
            // Add class when first section is in center of viewport
            $(window).on('scroll', function() {
                if( !$('.intro').isOnScreen() && $('.logo').not('.is-fixed') ) {
                    $('.logo').addClass('is-fixed');
                } else {
                    $('.logo').removeClass('is-fixed');
                }
            });
        },

        aos: function() {
            // Initialize AOS
            AOS.init();
        },

        centerNav: function () {
            // Get Nav height and center nav position
            $(window).on('resize', function() {
                var windowWidth = $(window).width(),
                    halfIntro = $('.intro').height() / 2,
                    halfNav = $('.main-nav').height() / 2,
                    newHeight = halfIntro - halfNav;
                if( windowWidth > 960 ) {
                    $('.main-nav').css('top', newHeight + 25 + 'px').addClass('is-animating');
                }
            }).resize();
        }
    };

    siteController.init();


    // Utility Functions
    $.fn.isOnScreen = function(){
		var win = $(window);
		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    
    
    function scrollTo(elem) {
        if( elem.hasClass('js-anchor-bottom') ) {
            $('html, body').animate({scrollTop:$(document).height()}, 2000);
            return false;
        } else {
            $('html, body').animate({
                scrollTop: $( elem.attr('href') ).offset().top + 5
            }, 1000);
        }
    }

    // Add is-active class on scroll to proper section
    // $(window).scroll(function() {
    //     var scrollDistance = $(window).scrollTop();
    //     $('.js-anchor').each(function(i) {
    // 			if (scrollDistance >= $(this).offset().top ) {
    // 					$mainNavLinks.removeClass('is-active');
    //                     $mainNavLinks.eq(i).addClass('is-active');
    // 			} else if( $('.intro').isOnScreen() ) {
    //                 $mainNavLinks.removeClass('is-active');
    //             }
                
    //             if($(window).scrollTop() + $(window).height() === $(document).height()) {
    //                 $mainNavLinks.removeClass('is-active');
    //                 $mainNavLinks.eq(i).addClass('is-active');
    //             }
    // 	});
    // });
});