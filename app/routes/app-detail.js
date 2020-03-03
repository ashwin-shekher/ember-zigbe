import Route from "@ember/routing/route";

import { inject as service } from "@ember/service";

import { action } from "@ember/object";

import { tracked } from "@glimmer/tracking";

export default class AppDetailRoute extends Route {
  @service store;
  @tracked params;

  async model(params) {
    this.params = params;
    let store = this.store.peekRecord("app-data", params.id);
    if (!store) {
      await this.store.findAll("app-data");
      return this.store.peekRecord("app-data", params.id);
    } else {
      return store;
    }
  }

  @action downloadNow() {
    let params = this.params;
    this.store
      .findRecord("app-data", params.id)
      .then(function(appData) {
        appData.download_count = appData.download_count + 1;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
