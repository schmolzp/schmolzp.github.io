/* Author: Peter Schmolze */
$(document).ready(function() {
    var movementStrength = 50,
        height = movementStrength / $(window).height(),
        width = movementStrength / $(window).width(),
        $photo = $('.intro');
    $photo.mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2),
            pageY = e.pageY - ($(window).height() / 2),
            newvalueX = width * pageX * -1 - 25,
            newvalueY = height * pageY * -1 - 50;
        $photo.css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

    // Add class when first section is in center of viewport
    $(window).scroll(function() {
        if ( $(window).scrollTop() > $('.intro').height() / 2 ) {
            $('.main-nav').addClass("color-has-changed");
        } else {
            $('.main-nav').removeClass("color-has-changed");
        }
    });

    // Get Nav height and center nav position
    var halfIntro = $('.intro').height() / 2,
        halfNav = $('.main-nav').height() / 2,
        newHeight = halfIntro - halfNav;
    $('.main-nav').css('top', newHeight + 'px');

    /* Smooth scroll to anchor href and bring in back to top button */
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

    var $mainNavLinks = $('.main-nav a');

    $mainNavLinks.on("click", function(e) {
        e.preventDefault();
        $mainNavLinks.removeClass('is-active');
        $(this).addClass('is-active');
        
        scrollTo( $(this) );
    });

    $('.intro .btn').on('click', function() {
        scrollTo( $(this) );
    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('.js-anchor').each(function(i) {
				if (scrollDistance >= $(this).offset().top ) {
						$mainNavLinks.removeClass('is-active');
                        $mainNavLinks.eq(i).addClass('is-active');
				} else if( $('.intro').isOnScreen() ) {
                    $mainNavLinks.removeClass('is-active');
                }
		});
    }).scroll();
    
    function scrollTo(elem) {
        $('html, body').animate({
            scrollTop: $( elem.attr('href') ).offset().top
        }, 1000);
    }
});