import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | app-items", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      model: [
        {
          id: 1,
          name: "WhatsApp Messenger",
          description: "WhatsApp from Facebook",
          author_name: "WhatsApp Inc.",
          download_count: 105219552,
          thumbnail:
            "https://lh3.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s360-rw",
          tag: "COMMUNICATION",
          price: "FREE",
          download_link: "",
          rating: 4.5
        },
        {
          id: 2,
          name: "Hike Sticker Chat - Fun & Expressive Messaging",
          description:
            "The fastest messaging app on the market, connecting people via a unique, distributed network of data centers around the globe.",
          author_name: "Hike Private Limited",
          download_count: 130618,
          thumbnail:
            "https://lh3.googleusercontent.com/9w8L3ip45fMpzticsmLaC8RlG2VA8wQQ_H88TG2VV9uMnjU2dB2sFuGywy4qljSLdNQ=s360-rw",
          tag: "SOCIAL",
          price: "FREE",
          download_link: "",
          rating: 4.2
        }
      ]
    });
  });

  test("it renders", async function(assert) {
    await render(hbs`
      <AppItems @model={{this.model}} @searchTerm="WhatsApp"/>
    `);
    debugger;
    assert.equal(
      this.element.querySelectorAll(".app-item").length,
      1,
      "Filter Working!"
    );
  });
});
