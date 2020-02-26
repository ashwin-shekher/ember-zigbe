import Component from '@glimmer/component';

import {
  action
} from '@ember/object';

export default class HeaderComponent extends Component {

  @action updateSearchTerm() {
  this.sendAction('setSearchTerm'); 
  }
}
