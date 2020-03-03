import { module, test } from "qunit";

import Service from "@ember/service";
import { setupTest } from "ember-qunit";

module("Unit | Route | index", function(hooks) {
  setupTest(hooks);
  let routerStub;
  hooks.beforeEach(function() {
    routerStub = Service.extend({
      currentRouteName: "index"
    });
    this.owner.register("service:router", routerStub);
    this.owner.router.transitionTo = data => {
      return data;
    };
  });

  test("it exists", function(assert) {
    let routeURL = "add-app";
    let route = this.owner.lookup("route:index");
    assert.ok(route, "");
    assert.equal(route.send("navigateToAddApp"), routeURL, "Navigates to App");
  });

  
});
