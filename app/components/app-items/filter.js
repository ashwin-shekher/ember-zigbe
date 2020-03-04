import Component from "@glimmer/component";

export default class AppItemsFilterComponent extends Component {
  get results() {
    let { model, searchTerm } = this.args;
    if (searchTerm) {
      model = model.filter(appData => {
        let name = appData.name.toLowerCase();
        return name.includes(searchTerm.toLowerCase());
      });
    }
    return model;
  }
}
