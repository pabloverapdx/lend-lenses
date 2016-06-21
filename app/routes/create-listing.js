import Ember from 'ember';

 export default Ember.Route.extend({
   model() {
     return this.store.findAll('len');
   },
   actions: {
     saveLen(params) {
       console.log(params);
       var newLen = this.store.createRecord('len', params);
       newLen.save();
       this.transitionTo('create-listing');
     }
   }
 });
