import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  auth: service(),
  actions: {
    login() {
      get(this, 'auth').login();
    },
  },
});
