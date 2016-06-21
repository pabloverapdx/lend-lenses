 import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
brand: DS.attr(),//canon, nikon, etc
type: DS.attr(), //telephoto, macro, fisheye
description: DS.attr(),
condition: DS.attr(),
pricing: DS.attr(),
image: DS.attr(),
});
