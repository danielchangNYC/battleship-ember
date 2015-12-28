import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPlayer() {
      if (this.model.get('name')) {
        this.model
          .save()
          .then((player) => {
            this.transitionToRoute('games.game.humans.human.boards.board', player.get('game'), player, player.get('board'))
          })
      } else {
        alert('You must enter a name.')
      }
    }
  }
});