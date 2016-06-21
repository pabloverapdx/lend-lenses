import Ember from 'ember';

 export default Ember.Route.extend({
   model() {
     return this.store.findAll('len');
   },
   actions: {
     saveLen(params) {
       var newLen = this.store.createRecord('len', params);
       newLen.save();
       this.transitionTo('create-listing');
     },
     updateLen(len, params) {
       Object.keys(params).forEach(function(key){
         if(params[key]!==undefined) {
           len.set(key, params[key]);
         }
       });
       len.save();
       this.transition('create-listing');
     },
     delete(len){
       if(confirm('Delete lens?')){
         len.destroyRecord();
         this.transitionTo('create-listing');
       }
     }
   }
 });
