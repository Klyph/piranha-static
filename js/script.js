/**
 * @file simple DOM manipulation
 * @author  piranha INC | klyph
 * @contractor piranha INC
 */

(function($) {
	$(function(){
		var a = $(".navbar-nav li.active");
		$( ".nav-item" ).mouseenter(function() {
			a.removeClass("active");
		});

		$( ".nav-item" ).mouseleave(function() {
			a.addClass("active");
		});
	/*
		var b = $("#bs-navbar li.active");
		$("#bs-navbar").mouseenter(function(){
			b.removeClass("active");
		});

		$("#bs-navbar").mouseleave(function(){
			b.addClass("active");
		});
		*/
		// toggle search
		$("#search-icon").click(function() {
			$(".search-form").addClass("fade-slide-in-down");
		});
		$("#close-search-form").click(function(){
			$(".search-form").removeClass("fade-slide-in-down");
		});
	});
})(jQuery);