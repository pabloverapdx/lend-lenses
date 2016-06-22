import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
	username: DS.attr(),
	rating: DS.attr(),
	comment: DS.attr(),
	len: DS.belongsTo('len', {async: true})
});
