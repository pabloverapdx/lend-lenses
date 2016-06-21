import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('addNewLen');
    },
    saveP(){
      var params = {
        brand: this.get('brand') ? this.get('brand') : " ",
        type: this.get('type') ? this.get('type') : " ",
        description: this.get('description') ? this.get('description') : " ",
        condition: this.get('condition') ? this.get('condition') : " ",
        pricing: this.get('pricing') ? this.get('pricing') : " ",
        image: this.get('image') ? this.get('image') : " ",
      };
      this.toggleProperty('addNewLen');
      this.set('brand', " ");
      this.set('type', " ");
      this.set('description', " ");
      this.set('condition', " ");
      this.set('pricing', " ");
      this.set('image', " ");
      this.sendAction('saveLen', params);
    }
  }
});
