import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class FormComponentComponent extends Component {
  @tracked name = "";
  @tracked author_name;
  @tracked description;
  @tracked download_count = 0;
  @tracked thumbnail;
  @tracked tag;
  @tracked price = "FREE";
  @tracked download_link;
  @tracked rating = 0;

  @service store;
  @service router;

  @action submit() {
    this.store.createRecord("app-data", {
      id: new Date().valueOf(),
      name: this.name || "asad",
      author_name: this.author_name || "asad",
      description: this.description || "asad",
      download_count: this.download_count || 4,
      thumbnail: this.thumbnail || "asad",
      tag: this.tag || "asad",
      price: this.price || "asad",
      download_link: this.download_link || "asad",
      rating: this.rating || "asad"
    });

    this.router.transitionTo("index");
  }
}
