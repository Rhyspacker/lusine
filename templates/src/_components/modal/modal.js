// ==============================
// videoModal
// ========================================

app.videoModal = {

  config: {
    modal: '.modal',
    trigger: '.modal__trigger',
    triggerCard: 'modal__trigger--card',
    triggerOuter: '.modal__trigger__outer',
    closeTrigger: '.modal__close',
    overlay: '.modal__overlay',
  },

  isActive: false,

  openModal: function(iframeSrc) {
    var self = this;

    var modalHtml = '<div class="modal"><div class="modal__inner"><iframe width="100%" height="100%" src="'+iframeSrc+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><button class="modal__close"><span></span><span></span></button></div><div class="modal__overlay"></div>';
    var modalElement = document.createElement("div");
    app.globals.body.appendChild(modalElement);
    modalElement.outerHTML = modalHtml;

    var modal = document.querySelector(self.config.modal);
    setTimeout(function () {
      modal.classList.add(app.globals.states.active);
      app.globals.body.classList.add(app.globals.states.noScroll);
      modal.focus();
    }, 100);

    self.handleClose();
  },

  handleClose: function() {
    var self = this;
    var modal = document.querySelector(self.config.modal);
    var closeTrigger = document.querySelector(self.config.closeTrigger);
    var overlay = document.querySelector(self.config.overlay);

    closeTrigger.addEventListener("click", function() {
      modal.classList.remove(app.globals.states.active);
      app.globals.body.classList.remove(app.globals.states.noScroll);
      setTimeout(function () {
        app.globals.body.removeChild(modal);
        app.globals.body.removeChild(overlay);
      }, 300);
    })

    overlay.addEventListener("click", function() {
      modal.classList.remove(app.globals.states.active);
      app.globals.body.classList.remove(app.globals.states.noScroll);
      setTimeout(function () {
        app.globals.body.removeChild(modal);
        app.globals.body.removeChild(overlay);
      }, 300);
    })
  },

  handleTriggerClicks: function(trigger) {
    var self = this;

    var iframeSrc = trigger.getAttribute("data-iframe");

    trigger.addEventListener("click", function(e) {
      // Make sure only one click event is fired
      if (e.target !== this) return;

      self.openModal(iframeSrc);
    })
  },

  handleTriggerOuterClicks: function(triggerOuter) {
    var self = this;

    var triggerInside = triggerOuter.querySelector(self.config.trigger);
    var iframeSrc = triggerInside.getAttribute("data-iframe");

    triggerOuter.addEventListener("click", function() {
      self.openModal(iframeSrc);
    })
  },

  handleCardTriggerPosition: function(trigger) {
    var cardMedia = trigger.closest(".card__media");
    var triggerPosY = (cardMedia.offsetHeight / 2) + "px";

    trigger.style.top = triggerPosY;
  },

  init: function() {
    var self = this;

    var triggers = document.querySelectorAll(self.config.trigger);
    var triggersOuter = document.querySelectorAll(self.config.triggerOuter);

    if (triggers !== null) {
      for (var i = 0; i < triggers.length; i++) {
        var trigger = triggers[i];

        var triggerInCard = trigger.classList.contains(self.config.triggerCard) ? true : false;

        if (triggerInCard) {
          self.handleCardTriggerPosition(trigger);
        }

        self.handleTriggerClicks(trigger);
      }
    }

    if (triggersOuter !== null) {
      for (var i = 0; i < triggersOuter.length; i++) {
        var triggerOuter = triggersOuter[i];

        self.handleTriggerOuterClicks(triggerOuter);
      }
    }

  }
};

domready(function () {
  app.videoModal.init();
});
