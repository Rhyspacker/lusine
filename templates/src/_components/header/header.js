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
    }

  },


  handleNav: function(header) {
    var self = this;

    var trigger = document.querySelector(self.config.trigger);

    trigger.addEventListener("click", function() {
      if (self.isActive == false) {
        header.classList.add(app.globals.states.active);
        trigger.classList.add(app.globals.states.active);
        self.isActive = true;
      }
      else if (self.isActive == true) {
        header.classList.remove(app.globals.states.active);
        trigger.classList.remove(app.globals.states.active);
        self.isActive = false;
      }
    })

    console.log(trigger);
  },


};

domready(function () {
  app.header.init();
});
