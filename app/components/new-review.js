import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    saveReview() {
      var params = {
        username: this.get('username'),
        rating: this.get('rating'),
        comment: this.get('comment'),
        len: this.get('len'),
      };
      this.sendAction('saveReview', params)
			this.set('username', "");
			this.set('rating', "");
			this.set('comment', "");
			this.set('len', "");
    }
  }
});
