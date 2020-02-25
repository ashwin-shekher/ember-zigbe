import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';

import {
  tracked
} from '@glimmer/tracking';

import {
  action
} from '@ember/object';

export default class IndexRoute extends Route {

  @service store;

  @tracked searchTerm = "";

  async model() {

debugger;
    let appData = this.store.peekAll('app-data')
    if (appData.content.length == 0 ) {
      appData = await this.store.findAll('app-data');
    }

    // console.log(appData);
    return appData;
  }

  @action navigateToAddApp(id) {
    this.transitionTo('add-app');
  }

  @action setSearchTerm() {
    console.log("Term" );
    // this.searchTerm = "hello";
  }
}
