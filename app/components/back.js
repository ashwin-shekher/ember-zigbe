import Component from '@glimmer/component';

import { inject as service } from '@ember/service';

import {
    action
  } from '@ember/object';


export default class BackComponent extends Component {
  @service router;

  @action navigateToHome() {
    this.router.transitionTo('index');
  }
}
