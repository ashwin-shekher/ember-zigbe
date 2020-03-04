import { module, test } from "ember-qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

import { click } from "@ember/test-helpers";

import Service from "@ember/service";
Service.extend({
  createRecord() {
    return this.save();
  },
  save() {}
});


module("Integration | Component | form-component", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {});

  test("it renders", async function(assert) {
    this.owner.register(
      "service:router",
      Service.extend({
        transitionTo(data) {
          assert.ok(true, "TransitionTo Called with Data '" + data + "'");
        }
      })
    );

    await render(hbs`<FormComponent />`);

    assert.dom(".app_name").exists();
    assert.dom(".app_thumbnail").exists();
    assert.dom(".app_name").exists();
    assert.dom(".app_description").exists();
    assert.dom(".app_tag").exists();

    await click(".submitBtn");
    
  });
});
