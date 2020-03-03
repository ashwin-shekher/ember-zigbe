import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | app-item", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let data = {
      thumbnail:
        "https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s360-rw",
      rating: "3",
      id: "5",
      name: "CODE SKOOL",
      author_name: "ASHWIN",
      tag: "COMMUNICATION"
    };
    this.set("data", data);

    await render(hbs`<AppItem @data={{data}}/>`);

    assert.dom(".app-img").exists();
    assert.dom(".app-info").exists();
    assert.dom(".app-rating").exists();
    assert.dom(".app-name").exists();
    assert.dom(".app-author").exists();
    assert.dom(".app-tag").exists();

    assert.dom(".app-name-link").exists();

    assert.equal(
      this.element.querySelector(".app-rating").textContent.trim(),
      data.rating
    );
    assert.equal(
      this.element.querySelector(".app-name").textContent.trim(),
      data.name
    );
    assert.equal(
      this.element.querySelector(".app-author").textContent.trim(),
      data.author_name
    );
    assert.equal(
      this.element.querySelector(".app-tag").textContent.trim(),
      data.tag
    );
    assert.equal(
      this.element.querySelector(".app-img").getAttribute("style"),
      "background-image: url(" + "'" + data.thumbnail + "'" + ");"
    );
  });
});
