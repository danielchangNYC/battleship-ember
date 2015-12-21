import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.createRecord('human', {gameId: parseInt(params.game_id)})
  }
});
