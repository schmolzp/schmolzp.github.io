$(document).ready(function(){function o(o){return o.hasClass("js-anchor-bottom")?($("html, body").animate({scrollTop:$(document).height()},2e3),!1):void $("html, body").animate({scrollTop:$(o.attr("href")).offset().top+5},1e3)}var t={init:function(){t.toggleMobileNav(),t.scrollToSection(),t.moveBGPhoto(),t.aos(),t.animateProjectTitleBG(),t.fixedLogo(),t.centerNav()},toggleMobileNav:function(){$(".hamburger").on("click",function(){$(this).toggleClass("is-active"),$(".main-nav").toggleClass("is-open")})},scrollToSection:function(){var t=$(".main-nav a");t.on("click",function(i){i.preventDefault(),t.closest(".main-nav").removeClass("is-open"),$(".hamburger").toggleClass("is-active"),o($(this))}),$(".intro .btn, .logo").on("click",function(){o($(this))})},moveBGPhoto:function(){var o=50,t=o/$(window).height(),i=o/$(window).width(),n=$(".intro");$("html").hasClass("no-touch")&&n.mousemove(function(o){var e=o.pageX-$(window).width()/2,a=o.pageY-$(window).height()/2,s=i*e*-1-25,c=t*a*-1-50;n.css("background-position",s+"px     "+c+"px")})},fixedLogo:function(){$(window).on("scroll",function(){$(".intro").isOnScreen()&&$(window).scrollTop()?$(".logo").removeClass("is-fixed not-animating"):$(".intro").isOnScreen()||$(".logo").addClass("is-fixed")}),$(".logo").on("click",function(){$(this).addClass("not-animating")})},aos:function(){AOS.init({once:!0})},animateProjectTitleBG:function(){$(window).on("scroll",function(){var o=$(".project__title");o.each(function(t,i){i=o.eq(t),i.isOnScreen()?i.addClass("is-animating"):i.removeClass("is-animating")})})},centerNav:function(){$(window).on("resize",function(){var o=$(window).width(),t=$(".intro").height()/2,i=$(".main-nav").height()/2,n=t-i;o>960?$(".main-nav").css("top",n+"px").addClass("is-animating"):$(".main-nav").css("top","0").removeClass("is-animating")}).resize()}};t.init(),$.fn.isOnScreen=function(){var o=$(window),t={top:o.scrollTop(),left:o.scrollLeft()};t.right=t.left+o.width(),t.bottom=t.top+o.height();var i=this.offset();return i.right=i.left+this.outerWidth(),i.bottom=i.top+this.outerHeight(),!(t.right<i.left||t.left>i.right||t.bottom<i.top||t.top>i.bottom)}});