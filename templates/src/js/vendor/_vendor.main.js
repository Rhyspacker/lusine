// ==============================
// vendor.main.js
// ========================================

// For any vendor scripts required to be loaded in the main.js

// Domready - https://raw.githubusercontent.com/ded/domready/master/src/ready.js
//= include domready/domready.js

// Picturefill 2.3.1 - https://github.com/scottjehl/picturefill
//= include picturefill/2.3.1/picturefill.min.js

// svgxuse 1.2.3 - https://github.com/Keyamoon/svgxuse
//= include svgxuse/1.2.3/svgxuse.min.js

// Isotope
//= include isotope/isotope.pkgd.min.js

// Scroll Magic
var homePage = document.querySelector(".home");

// If home page then we'll run
if (homePage) {
  //= include scrollmagic\uncompressed\ScrollMagic.js
  //= include scrollmagic\uncompressed\plugins\animation.gsap.js
  //= include scrollmagic\uncompressed\plugins\debug.addIndicators.js
}
