import Component from "@glimmer/component";

import { inject as service } from "@ember/service";

import { action } from "@ember/object";
export default class AppDetailContentComponent extends Component {
  @service store;
  @service router;
  @action downloadNow() {
    let appData = this.store.peekRecord(
      "app-data",
      this.router.currentRoute.params.id
    );
    appData.download_count = appData.download_count + 1;
  }
}
