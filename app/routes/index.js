import Route from '@ember/routing/route';

import {
  inject as service
} from '@ember/service';


import {
  action
} from '@ember/object';

export default class IndexRoute extends Route {

  @service store;

  async model() {

    debugger;

    let appData = this.store.peekAll('app-data')
    if (appData.content.length == 0) {
      appData = await this.store.findAll('app-data');
    }

    // console.log(appData);
    return appData;
  }

  @action navigateToAddApp(id) {
    this.transitionTo('add-app');
  }
}
