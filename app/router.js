import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('create-listing');
  this.route('len', {path: '/len/:len_id'});
  this.route('cart');
});

export default Router;
