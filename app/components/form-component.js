import Component from '@glimmer/component';
import {
  tracked
} from '@glimmer/tracking';
import {
  action
} from '@ember/object';

import {
  inject as service
} from '@ember/service';

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

    let result = this.store.createRecord('app-data', {
      id: new Date().valueOf(),
      name: this.name,
      author_name: this.author_name,
      description: this.description,
      download_count: this.download_count,
      thumbnail: this.thumbnail,
      tag: this.tag,
      price: this.price,
      download_link: this.download_link,
      rating: this.rating
    });

    result.save();


    this.router.transitionTo('index');
  }

}
