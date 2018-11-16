// ==============================
// intro.js
// ========================================

app.intro = {

  config: {
    component: '.intro',
  },

  init: function() {
    var self = this;

    var component = document.querySelector(self.config.component);
    var isHome = document.querySelector(".home") ? true : false;
    var cookieIsSet = getCookie("intro") ? true : false;

    if (isHome) {
      if (introBrowserCheck()) {
        app.globals.body.removeChild(component);
      }
      else if (component !== null && cookieIsSet === false) {
        self.handleIntro(component);
        setCookie("intro", true, 14);
      }
      else {
        app.globals.body.removeChild(component);
      }
    }

  },

  handleIntro: function(component) {
    var self = this;


    setTimeout(function () {
      component.classList.add("transition--out");
    }, 4000);
    setTimeout(function () {
      app.globals.body.removeChild(component);
    }, 4750);
  },

};

domready(function () {
  app.intro.init();
});
