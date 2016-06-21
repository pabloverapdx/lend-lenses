import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('len', params.len_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var len = params.len;
      len.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return len.save();
      });
      this.transitionTo('len', params.len);
    }
  }
});
