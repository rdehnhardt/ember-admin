import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['top-menu'],
    tagName: 'nav',

    didInsertElement: function () {
        Ember.run.scheduleOnce('afterRender', this, this.bindMenuToggle);
    },

    bindMenuToggle: function() {
      this.$('.left-menu-toggle').on('click', function () {
          $(this).toggleClass('active');
          $('nav.left-menu').toggleClass('left-menu-showed');
          $('.main-backdrop').toggleClass('main-backdrop-showed');
      });
    }
});
