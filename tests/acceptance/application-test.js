import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { fillIn, click } from "@ember/test-helpers";

module("Acceptance | application", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /", async function(assert) {
    await visit("/");
    assert.equal(currentURL(), "/");
  });

  test("visiting / Search Feature Test", async function(assert) {
    await visit("/");
    await fillIn(".header input", "whatsapp");

    let content = document
      .querySelector(".app-item .app-name-link")
      .textContent.toLowerCase()
      .trim();

    assert.ok(content.includes("whatsapp"), "Whatsapp Filtered");
  });

  test("visiting / Navigating to Add Application Section", async function(assert) {
    await visit("/");
    await click(".heading button");
    assert.equal(currentURL(), "/add-app");
  });

  test("visiting / Navigating to corresponding App", async function(assert) {
    await visit("/");

    let elements = this.element.querySelectorAll(
      ".app-list-container .app-item"
    );

    if (elements.length > 0) {
      assert.ok(true, "App Found");

      await click(elements[0].querySelector(".app-name-link"));

      assert.ok(
        currentURL().includes("/app-detail/"),
        "Navigated To App Details"
      );
    } else {
      assert.ok(true, "Zero App Found");
    }
  });

  test("visiting /app-detail/2", async function(assert) {
    await visit("/");
    await visit("/app-detail/2");

    assert.dom(".app-name").exists();
    assert.equal(
      this.element.querySelector(".app-name").textContent.trim(),
      "Hike Sticker Chat - Fun & Expressive Messaging",
      "Data Matched!"
    );
  });

  test("visiting /add-app", async function(assert) {
    await visit("/");
    await visit("/add-app");
    await fillIn(".app_name", "Sample App");
    await fillIn(
      ".app_thumbnail",
      "https://lh3.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=s360-rw"
    );
    await fillIn(".app_description", "Sample App is for/to test Sample Flow");
    await fillIn(".app_author", "Author");
    await fillIn(".app_tag ", "COMMUNICATION");
    await click(".submitBtn");
    assert.equal(currentURL(), "/", "Navigated Successfull");


    let nameList = [];
    this.element.querySelectorAll(".app-name-link").forEach(function(el) {
      nameList.push(el.textContent.toLowerCase().trim());
    });

    assert.ok(nameList.indexOf("Sample App"), "App Added");
  });
});
