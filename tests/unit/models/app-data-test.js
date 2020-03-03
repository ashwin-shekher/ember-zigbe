import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

import { run } from "@ember/runloop";

module("Unit | Model | app data", function(hooks) {
  setupTest(hooks);
  test("it exists", function(assert) {
    const appData = run(() =>
      this.owner.lookup("service:store").createRecord("app-data", {
        name: "Whatsapp",
        description: "Description",
        author_name: "Ashwin"
      })
    );

    assert.equal(appData.name, "Whatsapp", "Store Successful!");
  });
});
