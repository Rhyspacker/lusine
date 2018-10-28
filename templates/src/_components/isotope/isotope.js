// ==============================
// isotope.js
// ========================================

app.isotope = {

  config: {
    component: '.card-deck',
  },

  init: function() {
    var self = this;

    var component = document.querySelector(self.config.component);

    if (component !== null) {

      var cardDeckItems = component.querySelector(".card-deck__items");
      self.handleIsotope(cardDeckItems);

    }
  },

  handleIsotope: function(cardDeckItems) {
    var self = this;
    // var iso = new Isotope(cardDeckItems, {
    //   itemSelector: '.col-sm-6',
    //   getSortData: {
    //     name: '.name',
    //     category: '[data-category]'
    //   },
    //   masonry: {
    //     //columnWidth: 200
    //   },
    //   sortBy: [ 'color', 'number' ]
    // });

    var $grid = $(".card-deck__items").isotope({
      itemSelector: '.col-md-6',
      filter: '.solo-work'
    });

    $('.card-deck__filter').on( 'click', function() {
      var filterValue = $( this ).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $('.card-deck__filter').removeClass("is--active");
      $(this).addClass("is--active");
    });
  },

  handleFilters: function(iso) {
    var self = this;


  },

};

domready(function () {
  app.isotope.init();
});
