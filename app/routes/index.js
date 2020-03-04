import Route from "@ember/routing/route";

import { inject as service } from "@ember/service";

import { tracked } from "@glimmer/tracking";

import { action } from "@ember/object";

export default class IndexRoute extends Route {
  @service store;

  @tracked searchTerm = "";

  async model() {
    let appData = this.store.peekAll("app-data");
    if (appData.content.length == 0) {
      appData = await this.store.findAll("app-data");
    }

    return appData;
  }

  @action navigateToAddApp() {
    let routeURL = "add-app";
    this.transitionTo(routeURL);
    return routeURL;
  }
}
