import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  auth: service(),
  actions: {
    logout() {
      get(this, 'auth').logout();
      this.transitionToRoute('index');
    }
  }
});
