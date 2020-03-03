import Component from "@glimmer/component";

export default class AppItemsFilterComponent extends Component {
  get results() {
    let { models, searchTerm } = this.args;

    if (searchTerm) {
      models = models.filter(appData => {
        let name = appData.name.toLowerCase();
        return name.includes(searchTerm.toLowerCase());
      });
    }
    return models;
  }
}
