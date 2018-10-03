// ==============================
// videoModal
// ========================================

app.videoModal = {

  config: {
    modal: '.video-modal',
    trigger: '.video-modal__trigger',
    closeTrigger: '.video-modal__close',
    overlay: '.video-modal__overlay',
  },

  isActive: false,

  openModal: function(iframeSrc) {
    var self = this;

    var modalHtml = '<div class="video-modal"><div class="video-modal__inner"><iframe width="100%" height="100%" src="'+iframeSrc+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><button class="video-modal__close"><span></span><span></span></button></div><div class="video-modal__overlay"></div>';
    var modalElement = document.createElement("div");
    app.globals.body.appendChild(modalElement);
    modalElement.outerHTML = modalHtml;
    self.handleClose();
  },

  handleClose: function() {
    var self = this;
    var modal = document.querySelector(self.config.modal);
    var closeTrigger = document.querySelector(self.config.closeTrigger);
    var overlay = document.querySelector(self.config.overlay);

    closeTrigger.addEventListener("click", function() {
      modal.remove();
      overlay.remove();
    })

    overlay.addEventListener("click", function() {
      modal.remove();
      this.remove();
    })
  },

  handleClicks: function(trigger) {
    var self = this;
    var iframeSrc = trigger.getAttribute("data-iframe");
    self.openModal(iframeSrc);
  },

  init: function() {
    var self = this;

    var triggers = document.querySelectorAll(self.config.trigger);

    if (triggers !== null) {

      for (var i = 0; i < triggers.length; i++) {
        var trigger = triggers[i];

        trigger.addEventListener("click", function() {
          self.handleClicks(trigger);
        })
      }

    }

  }
};

domready(function () {
  app.videoModal.init();
});
