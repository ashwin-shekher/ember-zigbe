import Component from '@glimmer/component';

import {
  action
} from '@ember/object';


export default class HeaderAddComponent extends Component {
  @action addApp() {
    this.transitionTo('add-app');
  }

}
