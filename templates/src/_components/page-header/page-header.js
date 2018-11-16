// ==============================
// pageHeader.js
// ========================================

app.pageHeader = {

  config: {
    component: '.page-header',
  },

  init: function() {
    var self = this;

    var $component = $(self.config.component);

    if($component !== null) {
      self.setPageHeaderHeight($component);
      self.handleResize($component);
      self.handleScroll($component);
    }
  },

  setPageHeaderHeight: function($component) {
    var self = this;

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth <= app.globals.breakpoints.tablet) {
      $component.height($(window).height() - 80);
    }
    else {
      $component.height("");
    }
  },

  handleResize: function($component) {
    var self = this;
    window.addEventListener("resize", throttle(function(){
      self.setPageHeaderHeight($component);
    }, 500));
  },

  handleScroll: function($component) {
    $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 150;   // set to whatever you want it to be

      if (y_scroll_pos <= 150) {
        $component.removeClass("has--scrolled");
      }
      else {
        $component.addClass("has--scrolled");
      }
    });
  }

};

domready(function () {
  app.pageHeader.init();
});
