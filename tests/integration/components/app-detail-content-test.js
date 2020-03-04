import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

import { run } from "@ember/runloop";
import Service from "@ember/service";

module("Integration | Component | app-detail-content", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    const appData = run(() =>
      this.owner.lookup("service:store").createRecord("app-data", {
        id: 2,
        thumbnail:
          "https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s360-rw",
        name: "Whatsapp",
        author_name: "Ashwin",
        download_count: 2
      })
    );

    this.owner.register(
      "service:router",
      Service.extend({
        currentRoute: {
          params: {
            id: 2
          }
        }
      })
    );

    this.setProperties({
      model: appData
    });

    await render(hbs`<AppDetailContent @model={{this.model}}/>`);

    assert.dom(".app-name").exists();
    assert.dom(".app-author").exists();
    assert.dom(".app-download-count").exists();

    assert.equal(
      this.element.querySelector(".app-name").textContent.trim(),
      "Whatsapp",
      "Data is passed!"
    );

    await click(".btn");

    let downloadCount = this.element
      .querySelector("[data-test-download-count]")
      .textContent.trim();

    assert.equal(
      downloadCount,
      appData.download_count,
      "Download Working yeah! " + appData.download_count
    );
  });
});
