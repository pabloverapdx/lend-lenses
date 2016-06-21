import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  toggleDetail() {
    this.toggleProperty('updateLenForm');
  },
  updateLen(len) {
      var params = {
        brand: this.get('brand'),
        type: this.get('type'),
        description: this.get('description'),
        condition: this.get('condition'),
        pricing: this.get('pricing'),
        image: this.get('image'),
      };
      this.toggleProperty('updateLenForm');
      this.sendAction('updateLen', len, params);
    }
  }
});
