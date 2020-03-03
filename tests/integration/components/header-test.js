import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | header", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    
    await render(hbs`
      <Header>
      {{input value=searchTerm class="search-box" placeholder="Search By App Name" }}
      </Header>
    `);

    assert.dom(".header").exists();
    assert.dom(".search-box").exists();
    assert.dom(".profile-box").exists();
    await fillIn(".search-box", "whatsapp");
  });
});
