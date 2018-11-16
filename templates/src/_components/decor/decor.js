// ==============================
// decor.js
// ========================================

domready(function () {
	var homePage = document.querySelector(".home");

	// If home page then we'll run
	if (homePage) {
	  // 	init scrollmagic
		var controller = new ScrollMagic.Controller();

		var decor = $(".decor");

		// Add tweenmax for backgroundParallax
		var parallax = TweenMax.to( decor, 1, {
			y: '-500',
			ease: Power0.easeNone
		} );

		// Create scrollmagic scene
		var parallaxScene = new ScrollMagic.Scene({
			duration: '3000',
		})
		.setTween( parallax )
		.addTo(controller);
	}

});
