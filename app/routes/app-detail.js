import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

export default class AppDetailRoute extends Route {

  @service store;
  async model(params) {
    return this.store.peekRecord('app-data', params.id);
  }
}