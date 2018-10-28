// ==============================
// header.js
// ========================================

app.header = {

  config: {
    header: '.header',
    trigger: '.header__nav__trigger',
  },

  isActive: false,

  init: function() {
    var self = this;

    var header = document.querySelector(self.config.header);

    if (header !== null) {
      self.handleNav(header);
      self.handleResize(header);
    }
  },


  handleNav: function(header) {
    var self = this;

    var trigger = document.querySelector(self.config.trigger);

    trigger.addEventListener("click", function() {
      if (self.isActive == false) {
        header.classList.add(app.globals.states.active);
        trigger.classList.add(app.globals.states.active);
        app.globals.body.classList.add(app.globals.states.noScroll);
        self.isActive = true;
      }
      else if (self.isActive == true) {
        header.classList.remove(app.globals.states.active);
        trigger.classList.remove(app.globals.states.active);
        app.globals.body.classList.remove(app.globals.states.noScroll);
        self.isActive = false;
      }
    })
  },

  handleResize: function(header) {
    var self = this;

    var trigger = document.querySelector(self.config.trigger);

    window.addEventListener("resize", throttle(function() {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      if (windowWidth >= app.globals.breakpoints.desktop) {
        header.classList.remove(app.globals.states.active);
        trigger.classList.remove(app.globals.states.active);
        app.globals.body.classList.remove(app.globals.states.noScroll);
        self.isActive = false;
      }
    }, 500));
  },


};

domready(function () {
  app.header.init();
});
