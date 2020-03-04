import Route from "@ember/routing/route";

import { inject as service } from "@ember/service";

import { action } from "@ember/object";

import { tracked } from "@glimmer/tracking";

export default class AppDetailRoute extends Route {
  @service store;
  params;

  async model(params) {
    console.log("params",params);
    this.params = params;
    let store = this.store.peekRecord("app-data", params.id);
    if (!store) {
      await this.store.findAll("app-data");
      return this.store.peekRecord("app-data", params.id);
    } else {
      return store;
    }
  }


}
