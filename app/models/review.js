import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	username: DS.attr(),
	rating: DS.attr(),
	comment: DS.attr(),
	len: DS.belongsTo('len', {async: true})
});
