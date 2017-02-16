import Ember from 'ember';

export default Ember.Component.extend({
    isOpened: false,
    actions: {
      toggleOpen: function() {
        this.toggleProperty('isOpened');
      }
    }
});
