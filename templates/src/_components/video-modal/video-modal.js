// ==============================
// videoModal
// ========================================

app.videoModal = {

  config: {
    component: '.video-modal',
  },

  isActive: false,

  openModal: function(component) {
    var self = this;
  },

  closeModal: function(component) {
    var self = this;
  },

  handleClicks: function(component) {
    var self = this;
  },

  init: function() {
    var self = this;

    var components = document.querySelectorAll(self.config.component);

    if(components.length) {

      for(var i=0; i<components.length; i++){
        var component = components[i];

        self.handleClicks(component);
      }

    }

  }
};

domready(function () {
  app.videoModal.init();
});
