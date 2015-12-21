import DS from 'ember-data';

export default DS.Model.extend({
  row: DS.attr(),
  column: DS.attr(),
  playerId: DS.attr(),
  hit: DS.attr(),
  updatedAt: DS.attr(),
  createdAt: DS.attr()
});