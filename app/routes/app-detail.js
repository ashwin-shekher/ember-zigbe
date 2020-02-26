import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

import {
  action
} from '@ember/object';

import {
  tracked
} from '@glimmer/tracking';

export default class AppDetailRoute extends Route {

  @service store;
  params;
  @tracked download_count;
  async model(params) {
    this.params = params;
    return this.store.peekRecord('app-data', params.id);
  }

  @action downloadNow(download_count) {
    this.store.findRecord('app-data', this.params.id).then(function (appData) {
      appData.download_count = appData.download_count + 1;
    });


  }
}
